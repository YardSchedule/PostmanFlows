import "./styles.css";
import { NodeEditor, Controls } from "flume";
import config, { stringListControl } from "./config";
import { useMemo, useRef } from "react";
import { nanoid } from "nanoid/non-secure";
import { Flow } from "./types";
import { FlowCard } from "./components/FlowCard";
import { useLocalStorage } from "crooks";
import { initialFlowsOrder, initialFlows } from "./initialFlows";

const initialFlow: Flow = {
  id: nanoid(8),
  title: "New Flow",
  nodes: {},
  comments: {}
};

export default function App() {
  const [currentFlowId, setCurrentFlowId] = useLocalStorage(
    "flows:currentFlowId",
    initialFlowsOrder[0]
  );
  const [flows, setFlows] = useLocalStorage("flows:flows", initialFlows);
  const [flowsOrder, setFlowsOrder] = useLocalStorage(
    "flows:flowsOrder",
    initialFlowsOrder
  );

  const currentFlow = flows[currentFlowId];

  const titleInput = useRef<HTMLInputElement>(null);

  const setFlowProperty = (key, value) => {
    setFlows((flows) => ({
      ...flows,
      [currentFlowId]: { ...flows[currentFlowId], [key]: value }
    }));
  };

  const createNewFlow = () => {
    const newFlow = {
      ...initialFlow,
      id: nanoid(8),
      title: `New Flow (${flowsOrder.length})`
    };
    setFlows((x) => ({ ...x, [newFlow.id]: newFlow }));
    setFlowsOrder((x) => [...x, newFlow.id]);
    setCurrentFlowId(newFlow.id);
  };

  const nodeTypesWithFlows = useMemo(() => {
    const flowNodeTypes: { [id: string]: Flow } = Object.values<Flow>(flows)
      .filter((flow: Flow) => flow.id !== currentFlowId)
      .reduce((obj, flow: Flow) => {
        const inputNodes = Object.values(flow.nodes).filter((node) =>
          (node.type as string).startsWith("input:")
        );
        const outputNodes = Object.values(flow.nodes).filter((node) =>
          (node.type as string).startsWith("output:")
        );

        obj[flow.id] = {
          type: flow.id,
          label: `Flow: ${flow.title}`,
          addable: true,
          deleteable: true,
          description: "",
          inputs: inputNodes.map((node) => {
            const definition = config.nodeTypes[node.type];
            let control;
            const controlType = definition.outputs[0].controls[0].type;
            if (controlType === "custom") {
              control = { ...stringListControl, name: node.id };
            } else {
              control = Controls[definition.outputs[0].controls[0].type]({
                name: node.id
              });
            }
            return {
              type: definition.outputs[0].type,
              name: node.id,
              color: definition.outputs[0].color,
              label: node.inputData.label.string,
              hidePort: false,
              controls: [control]
            };
          }),
          outputs: outputNodes.map((node) => {
            const definition = config.nodeTypes[node.type];
            return {
              type: definition.inputs[1].type,
              name: node.id,
              color: definition.inputs[1].color,
              label: node.inputData.label.string,
              hidePort: false,
              controls: [
                Controls[definition.inputs[1].controls[0].type]({
                  name: node.id
                })
              ]
            };
          })
        };
        console.log(obj);
        return obj;
      }, {});

    return {
      ...config.nodeTypes,
      ...flowNodeTypes
    };
  }, [currentFlowId]);

  return (
    <div className="App">
      <div className="flex column sidebar">
        {flowsOrder.map((flowId) => (
          <FlowCard
            title={flows[flowId].title}
            onClick={() => setCurrentFlowId(flowId)}
            selected={currentFlowId === flowId}
          />
        ))}
        <button className="new-flow-btn" onClick={createNewFlow}>
          + Create New Flow
        </button>
      </div>
      <div className="flex column work-area">
        <div className="flex row header">
          <input
            className="title"
            type="text"
            value={currentFlow.title}
            onFocus={() => titleInput?.current?.select()}
            onChange={(e) => setFlowProperty("title", e.target.value)}
            ref={titleInput}
          />
        </div>
        <NodeEditor
          portTypes={config.portTypes}
          nodeTypes={nodeTypesWithFlows}
          onChange={(nodes) => setFlowProperty("nodes", nodes)}
          onCommentsChange={(comments) => setFlowProperty("comments", comments)}
          nodes={currentFlow.nodes}
          comments={currentFlow.comments}
          key={currentFlow.id}
        />
      </div>
    </div>
  );
}

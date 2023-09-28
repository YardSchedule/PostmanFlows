import { FlumeConfig, Controls, Colors } from "flume";

export const stringListControl = Controls.custom({
  name: "stringList",
  label: "Text List",
  defaultValue: [""],
  render: (data: string[] = [], onChange) => {
    const handleTextChange = (index, text) => {
      onChange([...data.slice(0, index), text, ...data.slice(index + 1)]);
    };

    return (
      <div className="flex column" style={{ gap: 5 }}>
        {data.map((text, i) => (
          <input
            className="input"
            onMouseDown={(e) => e.stopPropagation()}
            type="text"
            value={text}
            onChange={(e) => handleTextChange(i, e.target.value)}
          />
        ))}
        <button className="button" onClick={() => onChange([...data, ""])}>
          + Add Item
        </button>
      </div>
    );
  }
});

const config = new FlumeConfig();
config
  .addPortType({
    type: "string",
    name: "string",
    label: "Text",
    color: Colors.green,
    controls: [
      Controls.text({
        name: "string",
        label: "Text"
      })
    ]
  })
  .addPortType({
    type: "number",
    name: "number",
    label: "Number",
    color: Colors.red,
    controls: [
      Controls.number({
        name: "number",
        label: "Number"
      })
    ]
  })
  .addPortType({
    type: "boolean",
    name: "boolean",
    label: "True/False",
    color: Colors.blue,
    controls: [
      Controls.checkbox({
        name: "boolean",
        label: "True/False"
      })
    ]
  })
  .addPortType({
    type: "stringList",
    name: "stringList",
    label: "Text List",
    color: Colors.orange,
    controls: [stringListControl]
  })
  .addPortType({
    type: "environment",
    name: "environment",
    label: "Environment",
    color: Colors.gray,
    controls: [
      Controls.select({
        name: "environment",
        label: "Environment",
        defaultValue: "",
        options: [
          { value: "nyt", label: "NYT" },
          { value: "gpt3", label: "GPT-3" }
        ]
      })
    ]
  })
  .addPortType({
    type: "responseType",
    name: "responseType",
    label: "Response Type",
    color: Colors.gray,
    controls: [
      Controls.select({
        name: "responseType",
        label: "Response Type",
        defaultValue: "",
        options: [
          { value: "string", label: "String" },
          { value: "boolean", label: "True/False" },
          { value: "number", label: "Number" },
          { value: "stringList", label: "Text List" }
        ]
      })
    ]
  })
  .addNodeType({
    type: "string",
    label: "Type: Text",
    description: "Outputs a string of text",
    inputs: (ports) => [ports.string()],
    outputs: (ports) => [ports.string()]
  })
  .addNodeType({
    type: "number",
    label: "Type: Number",
    description: "Outputs a number",
    inputs: (ports) => [ports.number()],
    outputs: (ports) => [ports.number()]
  })
  .addNodeType({
    type: "number:add",
    label: "Number: Add",
    description: "Adds two numbers",
    initialWidth: 150,
    inputs: (ports) => [
      ports.number({ name: "num1" }),
      ports.number({ name: "num2" })
    ],
    outputs: (ports) => [ports.number({ name: "output" })]
  })
  .addNodeType({
    type: "number:subtract",
    label: "Number: Subtract",
    description: "Subtracts two numbers",
    initialWidth: 150,
    inputs: (ports) => [
      ports.number({ name: "num1" }),
      ports.number({ name: "num2" })
    ],
    outputs: (ports) => [ports.number({ name: "output" })]
  })
  .addNodeType({
    type: "number:multiply",
    label: "Number: Multiply",
    initialWidth: 150,
    description: "Multiplies two numbers",
    inputs: (ports) => [
      ports.number({ name: "num1" }),
      ports.number({ name: "num2" })
    ],
    outputs: (ports) => [ports.number({ name: "output" })]
  })
  .addNodeType({
    type: "number:divide",
    label: "Number: Divide",
    initialWidth: 150,
    description: "Divides two numbers",
    inputs: (ports) => [
      ports.number({ name: "num1" }),
      ports.number({ name: "num2" })
    ],
    outputs: (ports) => [ports.number({ name: "output" })]
  })
  .addNodeType({
    type: "number:floor",
    label: "Number: Floor",
    initialWidth: 150,
    description: "Outputs the largest integer less-than or equal to a number",
    inputs: (ports) => [ports.number({ name: "num" })],
    outputs: (ports) => [ports.number({ name: "output" })]
  })
  .addNodeType({
    type: "number:ceil",
    label: "Number: Ceiling",
    initialWidth: 150,
    description: "Rounds a number to the next largest integer",
    inputs: (ports) => [ports.number({ name: "num" })],
    outputs: (ports) => [ports.number({ name: "output" })]
  })
  .addNodeType({
    type: "number:random",
    label: "Number: Random",
    initialWidth: 150,
    description: "Outputs a random number between 0 and 1",
    outputs: (ports) => [
      ports.number({ name: "random", label: "Random Number" })
    ]
  })
  .addNodeType({
    type: "boolean",
    label: "Type: True/False",
    description: "Outputs a boolean that is either true or false",
    inputs: (ports) => [ports.boolean()],
    outputs: (ports) => [ports.boolean()]
  })
  .addNodeType({
    type: "stringList",
    label: "Type: Text List",
    description: "Outputs a list of strings of text",
    inputs: (ports) => [ports.stringList()],
    outputs: (ports) => [
      ports.stringList({ name: "textList" }),
      ports.number({ name: "length", label: "Length" })
    ]
  })
  .addNodeType({
    type: "string:replace",
    label: "Text: Replace Text",
    description:
      "Replaces a given string of text with a different string of text",
    inputs: (ports) => [
      ports.string({ name: "inputString", label: "Text to search in" }),
      ports.string({ name: "stringToFind", label: "Text to find" }),
      ports.string({ name: "replaceWith", label: "Replace with" })
    ],
    outputs: (ports) => [
      ports.string({ name: "output", label: "Replaced Text" })
    ]
  })
  .addNodeType({
    type: "string:concat",
    label: "Text: Combine Text",
    description: "Combines multiple strings of text together",
    inputs: (ports) => [
      ports.string({ name: "text1", label: "Text" }),
      ports.string({ name: "text2", label: "Text" }),
      ports.string({ name: "text3", label: "Text" })
    ],
    outputs: (ports) => [
      ports.string({ name: "output", label: "Combined Text" })
    ]
  })
  .addNodeType({
    type: "textList:select",
    label: "Text List: Get by Index",
    description: "Selects a string of text from a text list at a given index",
    inputs: (ports) => [
      ports.stringList({ name: "list", label: "Text List" }),
      ports.number({ name: "index", label: "Index" })
    ],
    outputs: (ports) => [
      ports.string({ name: "output", label: "Text at index" })
    ]
  })
  .addNodeType({
    type: "request",
    label: "Request",
    description: "Perform an API request",
    initialWidth: 300,
    inputs: (ports) => (inputData) => {
      const url = inputData?.url?.string ?? "";
      const handlebars = url.match(/{{(.*?)}}/g) ?? [];
      const vars = handlebars.map((x) => x.slice(2, -2));
      return [
        ports.string({ name: "url", label: "URL" }),
        ...vars.map((portName) =>
          ports.string({ name: portName, label: portName })
        ),
        ports.responseType({
          name: "responseType",
          label: "Response Type",
          hidePort: true
        })
      ];
    },
    outputs: (ports) => (inputData) => {
      const type = inputData?.responseType?.responseType || "string";
      return [ports[type]({ name: type })];
    }
  })
  .addNodeType({
    type: "environment",
    label: "Environment",
    description: "Outputs evironment variables",
    inputs: (ports) => [ports.environment({ hidePort: true })],
    outputs: (ports) => (inputData) => {
      const selectedEnvironment: string =
        inputData?.environment?.environment ?? "";
      const optionMap = {
        "": [],
        nyt: ["NYT_API_KEY"],
        gpt3: ["OPEN_AI_KEY", "OPEN_AI_SECRET"]
      };
      const variables: string[] = optionMap[selectedEnvironment];
      return variables.map((v) => ports.string({ name: v, label: v }));
    }
  })
  .addNodeType({
    type: "output:string",
    label: "Output: Text",
    description: "Outputs a string of text from the flow",
    inputs: (ports) => [
      ports.string({ name: "label", label: "Property Name", hidePort: true }),
      ports.string({
        name: "output",
        label: "Text to output",
        noControls: true
      })
    ]
  })
  .addNodeType({
    type: "output:boolean",
    label: "Output: True/False",
    description: "Outputs a true/false from the flow",
    inputs: (ports) => [
      ports.string({ name: "label", label: "Property Name", hidePort: true }),
      ports.boolean({
        name: "output",
        label: "True/false to output",
        noControls: true
      })
    ]
  })
  .addNodeType({
    type: "output:number",
    label: "Output: Number",
    description: "Outputs a number from the flow",
    inputs: (ports) => [
      ports.string({ name: "label", label: "Property Name", hidePort: true }),
      ports.number({
        name: "output",
        label: "Number to output",
        noControls: true
      })
    ]
  })
  .addNodeType({
    type: "output:stringList",
    label: "Output: Text List",
    description: "Outputs a list of text strings from the flow",
    inputs: (ports) => [
      ports.string({ name: "label", label: "Property Name", hidePort: true }),
      ports.stringList({
        name: "output",
        label: "Text list to output",
        noControls: true
      })
    ]
  })
  .addNodeType({
    type: "input:string",
    label: "Input: Text",
    description: "Inputs a string of text into the flow",
    inputs: (ports) => [
      ports.string({ name: "label", label: "Property Name", hidePort: true })
    ],
    outputs: (ports) => [
      ports.string({
        name: "output",
        label: "Text to output",
        noControls: true
      })
    ]
  })
  .addNodeType({
    type: "input:boolean",
    label: "Input: True/False",
    description: "Inputs a true/false into the flow",
    inputs: (ports) => [
      ports.string({ name: "label", label: "Property Name", hidePort: true })
    ],
    outputs: (ports) => [
      ports.boolean({
        name: "output",
        label: "True/false to output",
        noControls: true
      })
    ]
  })
  .addNodeType({
    type: "input:number",
    label: "Input: Number",
    description: "Inputs a number into the flow",
    inputs: (ports) => [
      ports.string({ name: "label", label: "Property Name", hidePort: true })
    ],
    outputs: (ports) => [
      ports.number({
        name: "output",
        label: "Number to output",
        noControls: true
      })
    ]
  })
  .addNodeType({
    type: "input:stringList",
    label: "Input: Text List",
    description: "Inputs a list of text strings into the flow",
    inputs: (ports) => [
      ports.string({ name: "label", label: "Property Name", hidePort: true })
    ],
    outputs: (ports) => [
      ports.stringList({
        name: "output",
        label: "Text list to output",
        noControls: true
      })
    ]
  });

export default config;

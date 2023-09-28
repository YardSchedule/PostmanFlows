export const initialFlows = {
  hHHk0Px0: {
    id: "hHHk0Px0",
    title: "Get Random Number Between",
    nodes: {
      _Z9UuhsyK_: {
        id: "_Z9UuhsyK_",
        x: -643.3992835783691,
        y: -325.1471670509932,
        type: "number:random",
        width: 150,
        connections: {
          inputs: {},
          outputs: { random: [{ nodeId: "yuq4wxLFcF", portName: "num1" }] }
        },
        inputData: {}
      },
      UU_i3_RQyW: {
        id: "UU_i3_RQyW",
        x: -717,
        y: -220.5,
        type: "input:number",
        width: 200,
        connections: {
          inputs: {},
          outputs: { output: [{ nodeId: "qSkiEmUu9x", portName: "num" }] }
        },
        inputData: { label: { string: "Min" } }
      },
      "4ntVZDYLsl": {
        id: "4ntVZDYLsl",
        x: -717,
        y: -61.5,
        type: "input:number",
        width: 200,
        connections: {
          inputs: {},
          outputs: { output: [{ nodeId: "QlbNU04of_", portName: "num" }] }
        },
        inputData: { label: { string: "Max" } }
      },
      "0oOWvFnuf1": {
        id: "0oOWvFnuf1",
        x: -170,
        y: -97.5,
        type: "number:subtract",
        width: 150,
        connections: {
          inputs: {
            num2: [{ nodeId: "qSkiEmUu9x", portName: "output" }],
            num1: [{ nodeId: "QlbNU04of_", portName: "output" }]
          },
          outputs: { output: [{ nodeId: "yuq4wxLFcF", portName: "num2" }] }
        },
        inputData: { num1: { number: 0 }, num2: { number: 0 } }
      },
      yuq4wxLFcF: {
        id: "yuq4wxLFcF",
        x: 48,
        y: -150.5,
        type: "number:multiply",
        width: 150,
        connections: {
          inputs: {
            num1: [{ nodeId: "_Z9UuhsyK_", portName: "random" }],
            num2: [{ nodeId: "0oOWvFnuf1", portName: "output" }]
          },
          outputs: { output: [{ nodeId: "RRK8LGNOS1", portName: "num1" }] }
        },
        inputData: { num1: { number: 0 }, num2: { number: 0 } }
      },
      RRK8LGNOS1: {
        id: "RRK8LGNOS1",
        x: 261,
        y: -251.5,
        type: "number:add",
        width: 150,
        connections: {
          inputs: {
            num1: [{ nodeId: "yuq4wxLFcF", portName: "output" }],
            num2: [{ nodeId: "qSkiEmUu9x", portName: "output" }]
          },
          outputs: { output: [{ nodeId: "XfYMQFxEWY", portName: "num" }] }
        },
        inputData: { num1: { number: 0 }, num2: { number: 0 } }
      },
      "3Fd4Kkr729": {
        id: "3Fd4Kkr729",
        x: 654,
        y: -231.5,
        type: "output:number",
        width: 200,
        connections: {
          inputs: { output: [{ nodeId: "XfYMQFxEWY", portName: "output" }] },
          outputs: {}
        },
        inputData: { label: { string: "Random Number" }, output: { number: 0 } }
      },
      QlbNU04of_: {
        id: "QlbNU04of_",
        x: -416.99998643663207,
        y: -34.55556233723959,
        type: "number:floor",
        width: 150,
        connections: {
          inputs: { num: [{ nodeId: "4ntVZDYLsl", portName: "output" }] },
          outputs: { output: [{ nodeId: "0oOWvFnuf1", portName: "num1" }] }
        },
        inputData: { num: { number: 0 } }
      },
      qSkiEmUu9x: {
        id: "qSkiEmUu9x",
        x: -417,
        y: -189.5,
        type: "number:ceil",
        width: 150,
        connections: {
          inputs: { num: [{ nodeId: "UU_i3_RQyW", portName: "output" }] },
          outputs: {
            output: [
              { nodeId: "RRK8LGNOS1", portName: "num2" },
              { nodeId: "0oOWvFnuf1", portName: "num2" }
            ]
          }
        },
        inputData: { num: { number: 0 } }
      },
      XfYMQFxEWY: {
        id: "XfYMQFxEWY",
        x: 458,
        y: -192.5,
        type: "number:floor",
        width: 150,
        connections: {
          inputs: { num: [{ nodeId: "RRK8LGNOS1", portName: "output" }] },
          outputs: { output: [{ nodeId: "3Fd4Kkr729", portName: "output" }] }
        },
        inputData: { num: { number: 0 } }
      }
    },
    comments: {
      "1D_BdXoUd5": {
        id: "1D_BdXoUd5",
        text: "",
        x: -736.1111323038738,
        y: -236.45833333333331,
        width: 240.43231964111328,
        height: 337.0989735921224,
        color: "blue"
      },
      c_UDD8i6HY: {
        id: "c_UDD8i6HY",
        text: "",
        x: 636.1111111111113,
        y: -252.08333333333343,
        width: 236.88191731770848,
        height: 182.1658070882162,
        color: "green"
      }
    }
  },
  e1JtlXkR: {
    id: "e1JtlXkR",
    title: "Get Random from Text List",
    nodes: {
      MVfRIZjrWJ: {
        id: "MVfRIZjrWJ",
        x: 210.9078369140625,
        y: -38.56488037109375,
        type: "hHHk0Px0",
        width: 200,
        connections: {
          inputs: {
            "4ntVZDYLsl": [{ nodeId: "7S7PiJiFik", portName: "output" }]
          },
          outputs: {
            "3Fd4Kkr729": [{ nodeId: "6lNWMeE3zp", portName: "index" }]
          }
        },
        inputData: {
          UU_i3_RQyW: { UU_i3_RQyW: 0 },
          "4ntVZDYLsl": { "4ntVZDYLsl": 0 }
        }
      },
      iM82zOw0tL: {
        id: "iM82zOw0tL",
        x: -495.5,
        y: -211.5,
        type: "input:stringList",
        width: 200,
        connections: {
          inputs: {},
          outputs: {
            output: [
              { nodeId: "EqkXZZ1cco", portName: "stringList" },
              { nodeId: "6lNWMeE3zp", portName: "list" }
            ]
          }
        },
        inputData: { label: { string: "Text List" } }
      },
      EqkXZZ1cco: {
        id: "EqkXZZ1cco",
        x: -233.40491341371524,
        y: -30.34861596657592,
        type: "stringList",
        width: 200,
        connections: {
          inputs: {
            stringList: [{ nodeId: "iM82zOw0tL", portName: "output" }]
          },
          outputs: { length: [{ nodeId: "7S7PiJiFik", portName: "num1" }] }
        },
        inputData: { stringList: { stringList: [""] } }
      },
      "7S7PiJiFik": {
        id: "7S7PiJiFik",
        x: 15.089977083215672,
        y: -18.01011292371965,
        type: "number:subtract",
        width: 150,
        connections: {
          inputs: { num1: [{ nodeId: "EqkXZZ1cco", portName: "length" }] },
          outputs: {
            output: [{ nodeId: "MVfRIZjrWJ", portName: "4ntVZDYLsl" }]
          }
        },
        inputData: { num1: { number: 0 }, num2: { number: 1 } }
      },
      "6lNWMeE3zp": {
        id: "6lNWMeE3zp",
        x: 467.5,
        y: -136.5,
        type: "textList:select",
        width: 200,
        connections: {
          inputs: {
            list: [{ nodeId: "iM82zOw0tL", portName: "output" }],
            index: [{ nodeId: "MVfRIZjrWJ", portName: "3Fd4Kkr729" }]
          },
          outputs: { output: [{ nodeId: "xS-3ipCa8M", portName: "output" }] }
        },
        inputData: { list: { stringList: [""] }, index: { number: 0 } }
      },
      "xS-3ipCa8M": {
        id: "xS-3ipCa8M",
        x: 722.5,
        y: -130.5,
        type: "output:string",
        width: 200,
        connections: {
          inputs: { output: [{ nodeId: "6lNWMeE3zp", portName: "output" }] },
          outputs: {}
        },
        inputData: { label: { string: "Random item" }, output: { string: "" } }
      }
    },
    comments: {
      yh05OBohEV: {
        id: "yh05OBohEV",
        text: "",
        x: -513,
        y: -232.5,
        width: 237,
        height: 186,
        color: "blue"
      },
      "6EpVosJ53q": {
        id: "6EpVosJ53q",
        text: "",
        x: 707.5365037115074,
        y: -147.40343827323073,
        width: 233.1254923096327,
        height: 179.7916677518613,
        color: "green"
      }
    }
  },
  LBCt9v15: {
    id: "LBCt9v15",
    title: "NYT Headline Telephone",
    nodes: {
      Rz2J7zyeJn: {
        id: "Rz2J7zyeJn",
        x: -448.552830478322,
        y: -401.2657609057777,
        type: "request",
        width: 300,
        connections: {
          inputs: {
            NYT_API_KEY: [{ nodeId: "i5QkyTQZ-V", portName: "NYT_API_KEY" }]
          },
          outputs: {
            stringList: [{ nodeId: "vE6B6pR0ad", portName: "iM82zOw0tL" }]
          }
        },
        inputData: {
          url: {
            string:
              "https://api.nytimes.com/svc/topstories/v2/movies.json?api-key={{NYT_API_KEY}}"
          },
          NYT_API_KEY: { string: "" },
          responseType: { responseType: "stringList" }
        }
      },
      "i5QkyTQZ-V": {
        id: "i5QkyTQZ-V",
        x: -740.7229256634648,
        y: -434.9787091843275,
        type: "environment",
        width: 200,
        connections: {
          inputs: {},
          outputs: {
            NYT_API_KEY: [{ nodeId: "Rz2J7zyeJn", portName: "NYT_API_KEY" }]
          }
        },
        inputData: { environment: { environment: "nyt" } }
      },
      vE6B6pR0ad: {
        id: "vE6B6pR0ad",
        x: -50.71810009774691,
        y: -177.65527311105146,
        type: "e1JtlXkR",
        width: 200,
        connections: {
          inputs: {
            iM82zOw0tL: [{ nodeId: "Rz2J7zyeJn", portName: "stringList" }]
          },
          outputs: {
            "xS-3ipCa8M": [{ nodeId: "w8PV73Auvi", portName: "AeBvhy6wih" }]
          }
        },
        inputData: { iM82zOw0tL: {} }
      },
      w8PV73Auvi: {
        id: "w8PV73Auvi",
        x: 228.947006749194,
        y: -163.6707039269115,
        type: "02dpf4H3",
        width: 200,
        connections: {
          inputs: {
            AeBvhy6wih: [{ nodeId: "vE6B6pR0ad", portName: "xS-3ipCa8M" }]
          },
          outputs: {
            r9fKNbKoIU: [
              { nodeId: "bcDxSF4E5L", portName: "headline" },
              { nodeId: "8SSgP8Jbot", portName: "text1" }
            ]
          }
        },
        inputData: { AeBvhy6wih: { AeBvhy6wih: "" } }
      },
      bcDxSF4E5L: {
        id: "bcDxSF4E5L",
        x: 504.43808301550956,
        y: -384.29591325541185,
        type: "request",
        width: 300,
        connections: {
          inputs: {
            headline: [{ nodeId: "w8PV73Auvi", portName: "r9fKNbKoIU" }],
            OPEN_AI_KEY: [{ nodeId: "fFC3qo4-ZV", portName: "OPEN_AI_KEY" }]
          },
          outputs: {
            string: [{ nodeId: "LToR0juctC", portName: "AeBvhy6wih" }]
          }
        },
        inputData: {
          url: {
            string:
              "https://api.openai.com/v1/engines/text-davinci-001/completions?headline={{headline}}&&apikey={{OPEN_AI_KEY}}"
          },
          headline: { string: "" },
          OPEN_AI_KEY: { string: "" },
          responseType: { responseType: "string" }
        }
      },
      LToR0juctC: {
        id: "LToR0juctC",
        x: 840.5162057932558,
        y: -299.9947291681551,
        type: "02dpf4H3",
        width: 200,
        connections: {
          inputs: {
            AeBvhy6wih: [{ nodeId: "bcDxSF4E5L", portName: "string" }]
          },
          outputs: {
            r9fKNbKoIU: [
              { nodeId: "L8mPUJ23L5", portName: "abstract" },
              { nodeId: "8SSgP8Jbot", portName: "text2" }
            ]
          }
        },
        inputData: { AeBvhy6wih: { AeBvhy6wih: "" } }
      },
      L8mPUJ23L5: {
        id: "L8mPUJ23L5",
        x: 1118.995143710531,
        y: -501.7330795182003,
        type: "request",
        width: 300,
        connections: {
          inputs: {
            abstract: [{ nodeId: "LToR0juctC", portName: "r9fKNbKoIU" }],
            OPEN_AI_KEY: [{ nodeId: "fFC3qo4-ZV", portName: "OPEN_AI_KEY" }]
          },
          outputs: { string: [{ nodeId: "8SSgP8Jbot", portName: "text3" }] }
        },
        inputData: {
          url: {
            string:
              "https://api.openai.com/v1/engines/text-davinci-001/completions?abstract={{abstract}}&&apikey={{OPEN_AI_KEY}}"
          },
          abstract: { string: "" },
          OPEN_AI_KEY: { string: "" },
          responseType: { responseType: "string" }
        }
      },
      "2bfmR6BcFM": {
        id: "2bfmR6BcFM",
        x: 1751.0326309846232,
        y: -200.6518452717017,
        type: "output:string",
        width: 200,
        connections: {
          inputs: { output: [{ nodeId: "8SSgP8Jbot", portName: "output" }] },
          outputs: {}
        },
        inputData: {
          label: { string: "GPT-3 Generated Headline" },
          output: { string: "" }
        }
      },
      "fFC3qo4-ZV": {
        id: "fFC3qo4-ZV",
        x: 172.0253696924807,
        y: -533.284532860088,
        type: "environment",
        width: 200,
        connections: {
          inputs: {},
          outputs: {
            OPEN_AI_KEY: [
              { nodeId: "bcDxSF4E5L", portName: "OPEN_AI_KEY" },
              { nodeId: "L8mPUJ23L5", portName: "OPEN_AI_KEY" }
            ]
          }
        },
        inputData: { environment: { environment: "gpt3" } }
      },
      "8SSgP8Jbot": {
        id: "8SSgP8Jbot",
        x: 1477.1540919381032,
        y: -128.54739523045285,
        type: "string:concat",
        width: 200,
        connections: {
          inputs: {
            text3: [{ nodeId: "L8mPUJ23L5", portName: "string" }],
            text2: [{ nodeId: "LToR0juctC", portName: "r9fKNbKoIU" }],
            text1: [{ nodeId: "w8PV73Auvi", portName: "r9fKNbKoIU" }]
          },
          outputs: { output: [{ nodeId: "2bfmR6BcFM", portName: "output" }] }
        },
        inputData: {
          text1: { string: "" },
          text2: { string: "" },
          text3: { string: "" }
        }
      },
      "m0FUl7dTv-": {
        id: "m0FUl7dTv-",
        x: -448,
        y: -143.5,
        type: "request",
        width: 300,
        connections: { inputs: {}, outputs: {} },
        inputData: {
          url: { string: "https://google.com?search={{SEARCH_TERM}}&&{{new}}" },
          SEARCH_TERM: { string: "" },
          new: { string: "" },
          responseType: { responseType: "" }
        }
      }
    },
    comments: {}
  },
  "02dpf4H3": {
    id: "02dpf4H3",
    title: "Sanitize Text",
    nodes: {
      AeBvhy6wih: {
        id: "AeBvhy6wih",
        x: -407.5,
        y: -272.5,
        type: "input:string",
        width: 200,
        connections: {
          inputs: {},
          outputs: {
            output: [{ nodeId: "6zfjXlWHen", portName: "inputString" }]
          }
        },
        inputData: { label: { string: "Unsanitized Text" } }
      },
      "6zfjXlWHen": {
        id: "6zfjXlWHen",
        x: -112.5,
        y: -194.5,
        type: "string:replace",
        width: 200,
        connections: {
          inputs: {
            inputString: [{ nodeId: "AeBvhy6wih", portName: "output" }]
          },
          outputs: { output: [{ nodeId: "r9fKNbKoIU", portName: "output" }] }
        },
        inputData: {
          inputString: { string: "" },
          stringToFind: { string: '/"/g' },
          replaceWith: { string: "" }
        }
      },
      r9fKNbKoIU: {
        id: "r9fKNbKoIU",
        x: 170.5,
        y: -93.5,
        type: "output:string",
        width: 200,
        connections: {
          inputs: { output: [{ nodeId: "6zfjXlWHen", portName: "output" }] },
          outputs: {}
        },
        inputData: {
          label: { string: "Sanitized Text" },
          output: { string: "" }
        }
      }
    },
    comments: {}
  }
};

export const initialFlowsOrder = [
  "hHHk0Px0",
  "e1JtlXkR",
  "LBCt9v15",
  "02dpf4H3"
];

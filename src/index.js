const leftPad = require('left-pad');

const extension = {
    eezFlowExtensionInit: (eezStudio) => {
        const {
            React,
            mobx,
            registerClass,
            makeDerivedClassInfo,
            ActionComponent
        } = eezStudio;

        ////////////////////////////////////////////////////////////////////////////////

        class Test1ActionComponent extends ActionComponent {
            static classInfo = makeDerivedClassInfo(ActionComponent.classInfo, {
                properties: [
                    {
                        name: "property1",
                        type: 0 /* String */
                    },
                    {
                        name: "property2",
                        type: 6 /* Number */
                    }
                ], icon: (
                    React.createElement("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 14.049999237060547 14.005000114440918"
                      }, React.createElement("path", {
                        d: "M11.964 6.349c-.514 0-1.006.192-1.406.555v-1.64a1.77 1.77 0 0 0-1.76-1.767V3.49l-1.631.001c.348-.381.547-.881.547-1.406A2.088 2.088 0 0 0 5.628 0a2.088 2.088 0 0 0-2.084 2.085c0 .514.191 1.004.555 1.406H1.787V3.5C.826 3.516.049 4.3.049 5.264h.005l.005 1.82C0 7.519.152 8.032.624 8.2c.199.072.588.117.951-.395a1.086 1.086 0 0 1 1.971.626c0 .6-.487 1.086-1.086 1.086-.354 0-.688-.176-.896-.475-.348-.504-.756-.422-.914-.363-.466.168-.611.684-.596 1.053v2.506H.049a1.77 1.77 0 0 0 1.769 1.767h6.973a1.77 1.77 0 0 0 1.768-1.768V9.971c.381.348.881.547 1.406.547a2.088 2.088 0 0 0 2.085-2.086 2.09 2.09 0 0 0-2.086-2.083zm0 3.17c-.355 0-.688-.176-.896-.475-.348-.506-.757-.424-.915-.365-.466.168-.61.684-.595 1.053v2.506a.768.768 0 0 1-.768.768H1.818a.77.77 0 0 1-.769-.769h.005V9.971a2.085 2.085 0 0 0 3.492-1.539A2.088 2.088 0 0 0 2.46 6.348a2.08 2.08 0 0 0-1.406.555v-1.64h-.005a.77.77 0 0 1 .769-.768V4.49l2.46-.005c.059.008.119.013.18.013.389 0 .793-.169.938-.579.071-.199.116-.587-.396-.949a1.086 1.086 0 1 1 1.714-.885c0 .355-.176.688-.477.898-.501.346-.421.753-.363.913.168.467.673.613 1.053.595H8.79v.006c.424 0 .768.345.768.768l.004 1.82c-.059.435.094.949.566 1.117.199.072.588.117.95-.395a1.084 1.084 0 1 1 .886 1.712z"
                      }))
                ),
                componentHeaderColor: "#FFCC66",
                enabledInComponentPalette: (projectType) => projectType === "dashboard"
            });

            constructor() {
                super();

                this.property1 = "Hello";
                this.property2 = 42;

                mobx.observable(this);
                mobx.computed(this);
            }

            get outputs() {
                return [
                    ...super.outputs,
                    {
                        name: "result",
                        type: 6 /* Number */
                    }
                ];
            }

            async execute(runningFlow) {
                runningFlow.propagateValue(this, "result", leftPad(this.property1, 10, '*'));
            }
        }
        
        registerClass(Test1ActionComponent);

        ////////////////////////////////////////////////////////////////////////////////

        class SquareActionComponent extends ActionComponent {
            static classInfo = makeDerivedClassInfo(ActionComponent.classInfo, {
                icon: (
                    React.createElement("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 14.049999237060547 14.005000114440918"
                      }, React.createElement("path", {
                        d: "M11.964 6.349c-.514 0-1.006.192-1.406.555v-1.64a1.77 1.77 0 0 0-1.76-1.767V3.49l-1.631.001c.348-.381.547-.881.547-1.406A2.088 2.088 0 0 0 5.628 0a2.088 2.088 0 0 0-2.084 2.085c0 .514.191 1.004.555 1.406H1.787V3.5C.826 3.516.049 4.3.049 5.264h.005l.005 1.82C0 7.519.152 8.032.624 8.2c.199.072.588.117.951-.395a1.086 1.086 0 0 1 1.971.626c0 .6-.487 1.086-1.086 1.086-.354 0-.688-.176-.896-.475-.348-.504-.756-.422-.914-.363-.466.168-.611.684-.596 1.053v2.506H.049a1.77 1.77 0 0 0 1.769 1.767h6.973a1.77 1.77 0 0 0 1.768-1.768V9.971c.381.348.881.547 1.406.547a2.088 2.088 0 0 0 2.085-2.086 2.09 2.09 0 0 0-2.086-2.083zm0 3.17c-.355 0-.688-.176-.896-.475-.348-.506-.757-.424-.915-.365-.466.168-.61.684-.595 1.053v2.506a.768.768 0 0 1-.768.768H1.818a.77.77 0 0 1-.769-.769h.005V9.971a2.085 2.085 0 0 0 3.492-1.539A2.088 2.088 0 0 0 2.46 6.348a2.08 2.08 0 0 0-1.406.555v-1.64h-.005a.77.77 0 0 1 .769-.768V4.49l2.46-.005c.059.008.119.013.18.013.389 0 .793-.169.938-.579.071-.199.116-.587-.396-.949a1.086 1.086 0 1 1 1.714-.885c0 .355-.176.688-.477.898-.501.346-.421.753-.363.913.168.467.673.613 1.053.595H8.79v.006c.424 0 .768.345.768.768l.004 1.82c-.059.435.094.949.566 1.117.199.072.588.117.95-.395a1.084 1.084 0 1 1 .886 1.712z"
                      }))
                ),
                componentHeaderColor: "#FFCC66",
                enabledInComponentPalette: (projectType) => projectType === "dashboard"
            });

            constructor() {
                super();

                mobx.computed(this);
            }

            get inputs() {
                return [
                    ...super.inputs,
                    {
                        name: "x",
                        type: 6 /* Number */
                    }
                ];
            }

            get outputs() {
                return [
                    ...super.outputs,
                    {
                        name: "result",
                        type: 6 /* Number */
                    }
                ];
            }

            async execute(runningFlow) {
                const inputPropertyValue = runningFlow.getInputPropertyValue(this, "x");

                if (inputPropertyValue && inputPropertyValue.value != undefined) {
                    const x = inputPropertyValue.value;
                    runningFlow.propagateValue(this, "result", x * x);
                }

                return undefined;
            }

            getBody() {
                return React.createElement("pre", null, "x??");
            }
        }
        
        registerClass(SquareActionComponent);

        ////////////////////////////////////////////////////////////////////////////////
    }
};

exports.default = extension;

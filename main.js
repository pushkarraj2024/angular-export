import { generateAngularComponent } from "./angular-generator.js";

penpot.plugin("angular-exporter", function (penpot) {
    penpot.ui.on("generate-angular", async (selection) => {
        const nodes = await penpot.design.getSelectedNodes();
        const code = generateAngularComponent(nodes);
        penpot.ui.postMessage({ type: "angular-code", payload: code });
    });
});

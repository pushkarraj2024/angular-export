export function generateAngularComponent(nodes) {
    let html = "";
    let css = "";

    nodes.forEach(node => {
        if (node.type === "text") {
            html += `<p>${node.text}</p>\n`;
        } else if (node.type === "rectangle") {
            html += `<div class="rect-${node.id}"></div>\n`;
            css += `.rect-${node.id} {
                width: ${node.width}px;
                height: ${node.height}px;
                background-color: ${node.fill?.color || '#ccc'};
            }\n`;
        }
        // Extend for other node types: images, groups, etc.
    });

    const componentTs = `
import { Component } from '@angular/core';

@Component({
    selector: 'app-exported',
    templateUrl: './exported.component.html',
    styleUrls: ['./exported.component.scss']
})
export class ExportedComponent {}
    `;

    return {
        html,
        css,
        ts: componentTs
    };
}

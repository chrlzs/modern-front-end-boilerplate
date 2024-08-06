export function createVirtualDOM(node) {
    return node;
}

export function diff(oldNode, newNode) {
    // Simple diffing algorithm for demonstration
    return oldNode.isEqualNode(newNode);
}

export function patch(container, newNode) {
    container.innerHTML = '';
    container.appendChild(newNode);
}
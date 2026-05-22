import { type ComponentType, createElement } from "react";
import { createRoot, type Root } from "react-dom/client";

const roots = new Map<Element | DocumentFragment, Root>();

export function mountReact<P extends Record<string, unknown>>(
  container: Element | DocumentFragment,
  Component: ComponentType<P>,
  props: P = {} as P
): void {
  let root = roots.get(container);
  if (!root) {
    root = createRoot(container);
    roots.set(container, root);
  }
  root.render(createElement(Component, props));
}

export function unmountReact(container: Element | DocumentFragment): void {
  const root = roots.get(container);
  if (root) {
    root.unmount();
    roots.delete(container);
  }
}

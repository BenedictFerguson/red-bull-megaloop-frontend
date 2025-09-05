// CSS
declare module '*.css' {
    /**
     * @deprecated Use `import style from './style.css?inline'` instead.
     */
    const css: string;
    export default css;
}

declare module '*.svg' {
    const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    const content: string;

    export { ReactComponent };
    export default content;
}

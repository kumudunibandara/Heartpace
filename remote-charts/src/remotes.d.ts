declare module 'hostApp/UserTheme' {
    import { layoutSlice, toggleTheme } from 'hostApp/UserTheme';
    import type { LayoutState } from 'hostApp/UserTheme';

    export { layoutSlice, toggleTheme };
    export type { LayoutState };
}

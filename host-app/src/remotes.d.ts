declare module 'remoteApp/Button' {
  export interface TButtonProps {
    text: string;
  }

  const Button: React.FC<TButtonProp>;
  export default Button;
}

declare module 'remoteApp/UserManager' {
  export * from './types';
  export { default } from './components/UserDataGrid';
}

declare module 'remoteCharts/BarChart' {
  export { default } from './components/Bar/BarChart';
}

declare module 'remoteCharts/UserByCountrySessionChart' {
  export { default } from './components/session/UserByCountrySessionChart';
}


declare module 'remoteCharts/UserPieChart' {
  export { default } from './components/pie/UserPieChart';
}


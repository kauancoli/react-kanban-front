import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      backgroundColor: string;
      columnColor: string;
      taskColor: string;
      HeaderFooterColor: string;
      titleColor: string;
      textColor: string;
    };
  }
}

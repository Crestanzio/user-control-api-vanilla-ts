export declare global {
  /**
   * See {@link User User}
   */

  export interface User {
    id?: string;
    name: string;
    username: string;
    email: string;
    company?: {
      name: string;
    };
  }

  /**
   * See {@link renderUser renderUser}
   */

  export type renderUser = User & {
    userContainer: HTMLDivElement;
    buttonEdit: HTMLButtonElement;
    buttonDelete: HTMLButtonElement;
    companyName: string;
  };

  /**
   * See {@link HTMLElementEvent HTMLElementEvent}
   */

  export type HTMLElementEvent<EventT extends Event, HTMLElementT extends HTMLElement> = EventT & {
    target: HTMLElementT;
  };
}

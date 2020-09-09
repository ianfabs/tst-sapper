import { CONTEXT_KEY } from "@sapper/internal/shared";
import { PageStore } from "@sapper/app/stores";

declare module "@sapper/app" {
  /**
   *
   * @template PS - A type for the generic PageStore type of `page`
   * @template PL - A type for the generic Writable store type of `preloading`
   * @template S - A type for the generic Writable store type of `session`
   */
  declare interface IStores<PS = {}, PL = any, S = any> {
    page: PageStore<PS>;
    preloading: Writable<PL>;
    session: Writable<S>;
  }
  declare const stores: () => any & IStores;
}

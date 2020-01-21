export interface Action<TAction, TPayload> {
  type: TAction;
  payload: TPayload;
}

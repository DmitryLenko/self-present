export type InfernalValueTypes<T> = T extends { [key: string]: infer U } ? U : never

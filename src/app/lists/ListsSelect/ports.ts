import type { List } from "@/domain/entities/list";
import type { BaseFetchManyApiPort } from "@/shared/lib/ports";

export type ListsSelectApiPort = BaseFetchManyApiPort<List>;

// src/types.ts

export type PcComponentType =
    | 'Processor'
    | 'Motherboard'
    | 'CPU Cooler'
    | 'Graphics Card'
    | 'RAM'
    | 'Storage'
    | 'Power Supply'
    | 'Case'
    | 'Monitor';

export interface ComponentData {
    name: string;
    price: number;
}

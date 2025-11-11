import React from 'react';
import { PcComponentType, ComponentData } from '../types';

const MOCKS: Record<PcComponentType, ComponentData[]> = {
    'Processor': [
        { name: 'AMD Ryzen 5 5600X', price: 180 },
        { name: 'Intel i5 12400F', price: 160 }
    ],
    'Motherboard': [
        { name: 'MSI B550M', price: 130 },
        { name: 'ASUS Prime Z590', price: 190 }
    ],
    'CPU Cooler': [
        { name: 'Cooler Master Hyper 212', price: 45 }
    ],
    'Graphics Card': [
        { name: 'NVIDIA RTX 4060', price: 400 }
    ],
    'RAM': [
        { name: 'Corsair Vengeance 16GB (2x8GB)', price: 70 }
    ],
    'Storage': [
        { name: 'Samsung 970 EVO 1TB', price: 90 }
    ],
    'Power Supply': [
        { name: 'Corsair 650W Bronze', price: 60 }
    ],
    'Case': [
        { name: 'NZXT H510', price: 85 }
    ],
    'Monitor': [
        { name: 'LG UltraGear 24"', price: 210 }
    ]
};

interface SelectorProps {
    type: PcComponentType;
    onSelect: (type: PcComponentType, data: ComponentData) => void;
    onClose: () => void;
}

const ComponentSelector: React.FC<SelectorProps> = ({ type, onSelect, onClose }) => (
    <div style={{
        background: "#fff", border: "2px solid #333",
        padding: 24, position: "fixed", top: 100, left: "35%", zIndex: 10
    }}>
        <h3>Selecciona {type}</h3>
        <ul>
            {MOCKS[type]?.map((comp, i) =>
                <li key={i}>
                    <button onClick={() => onSelect(type, comp)}>{comp.name} - ${comp.price}</button>
                </li>
            )}
        </ul>
        <button onClick={onClose}>Cerrar</button>
    </div>
);

export default ComponentSelector;

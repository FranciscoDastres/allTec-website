import React from 'react';
import { PcComponentType, ComponentData } from '../types';

interface TableProps {
    components: PcComponentType[];
    selected: Record<PcComponentType, ComponentData | undefined>;
    onAdd: (type: PcComponentType) => void;
}

const BuildTable: React.FC<TableProps> = ({ components, selected, onAdd }) => (
    <table width="100%" cellPadding={8} style={{ marginBottom: 30 }}>
        <thead>
            <tr>
                <th>Componente</th>
                <th>Producto Seleccionado</th>
                <th>Acción</th>
            </tr>
        </thead>
        <tbody>
            {components.map(comp => (
                <tr key={comp}>
                    <td>{comp}</td>
                    <td>{selected[comp]?.name || <span style={{ color: '#999' }}>Sin seleccionar</span>}</td>
                    <td><button onClick={() => onAdd(comp)}>+ Agregar</button></td>
                </tr>
            ))}
        </tbody>
    </table>
);

export default BuildTable;

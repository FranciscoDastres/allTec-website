import React from 'react';
import { PcComponentType, ComponentData } from '../types';

interface SummaryProps {
    selected: Record<PcComponentType, ComponentData | undefined>;
}

const BuildSummary: React.FC<SummaryProps> = ({ selected }) => {
    const components = Object.values(selected).filter(Boolean) as ComponentData[];
    const total = components.reduce((sum, c) => sum + c.price, 0);

    return (
        <div>
            <h3>Resumen de PC</h3>
            {components.length === 0 ? (
                <div>No se han seleccionado componentes.</div>
            ) : (
                <>
                    <ul>
                        {components.map((c, i) => (
                            <li key={i}>{c.name} - ${c.price}</li>
                        ))}
                    </ul>
                    <b>Total: ${total}</b>
                </>
            )}
        </div>
    );
};

export default BuildSummary;

import React, { useState } from 'react';
import BuildTable from './components/BuildTable';
import BuildSummary from './components/BuildSummary';
import ComponentSelector from './components/ComponentSelector';
import { PcComponentType, ComponentData } from './types';

const COMPONENTS: PcComponentType[] = [
  'Processor', 'Motherboard', 'CPU Cooler', 'Graphics Card', 'RAM',
  'Storage', 'Power Supply', 'Case', 'Monitor'
];

const App: React.FC = () => {
  const [selected, setSelected] = useState<Record<PcComponentType, ComponentData | undefined>>({} as Record<PcComponentType, ComponentData | undefined>);
  const [selectType, setSelectType] = useState<PcComponentType | null>(null);

  const handleAdd = (type: PcComponentType) => setSelectType(type);
  const handleSelect = (type: PcComponentType, data: ComponentData) => {
    setSelected(prev => ({ ...prev, [type]: data }));
    setSelectType(null);
  };

  return (
    <div style={{ maxWidth: 900, margin: '40px auto' }}>
      <h1>PC Builder</h1>
      <BuildTable components={COMPONENTS} selected={selected} onAdd={handleAdd} />
      <BuildSummary selected={selected} />
      {selectType &&
        <ComponentSelector
          type={selectType}
          onSelect={handleSelect}
          onClose={() => setSelectType(null)}
        />
      }
    </div>
  );
};

export default App;

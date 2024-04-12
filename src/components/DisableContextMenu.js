import React, { useEffect } from 'react';

const DisableContextMenu = () => {
  useEffect(() => {
    const disableContextMenu = () => {
      document.oncontextmenu = function () { return false; };
    };

    disableContextMenu();

    return () => {
      document.oncontextmenu = null; // Restaura la funcionalidad del menú contextual al desmontar el componente
    };
  }, []);

  return null; // Este componente no renderiza nada visualmente
};

export default DisableContextMenu;
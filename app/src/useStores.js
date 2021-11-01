import React from 'react'
import { storesContext } from './Stores/storesContext';

export const useStores = () => React.useContext(storesContext)
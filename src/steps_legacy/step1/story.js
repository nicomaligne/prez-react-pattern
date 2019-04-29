import React from 'react';

import pokemons from '../../data/pokemons';
import { headers } from '../../data/list-config';
import List from '../../common/List.component';

export default function Step1() {
  return <List title="datasets" headers={headers} collection={pokemons} />;
}

import React from 'react';
import './List.css';

function Value({ header, item, nameKey }) {
  switch (header.type) {
    case 'image':
      return <img src={item[header.key]} alt={item[nameKey]} />;
    default:
      return item[header.key];
  }
}

function TableRow({ headers, item }) {
  const nameKey = headers.find(({ type }) => type === 'main').key;
  const name = item[nameKey];
  return (
    <tr>
      {headers.map(header => <td><Value header={header} item={item} name={name} /></td>)}
    </tr>
  );
}

function Table(props) {
  const { title, headers, collection } = props;
  return (
    <table>
      <caption>{title}</caption>
      <thead>
        <tr>
          {headers.map(header => (<th>{header.label}</th>))}
        </tr>
      </thead>
      <tbody>
        {collection.map(item => (<TableRow headers={headers} item={item} />))}
      </tbody>
    </table>
  );
}

function Large(props) {
  const { title, headers, collection } = props;
  const mainHeader = headers.find(({ type }) => type === 'main');
  const otherHeaders = headers.filter(header => header !== mainHeader);

  return (
    <React.fragment>
      <h1>{title}</h1>
      <ol>
        { collection.map(item => (
          <li>
            <div>
              <h2>{item[mainHeader.key]}</h2>
              <dl>
                {otherHeaders.map(header => (
                  <div>
                    <dt>{header.label}</dt>
                    <dd><Value header={header} item={item} name={item[mainHeader.key]} /></dd>
                  </div>
                ))}
              </dl>
            </div>
          </li>
        )) }
      </ol>
    </React.fragment>
  );

}

export default function List(props) {
  const { displayMode = 'table', ...rest } = props;
  switch (displayMode) {
    case 'table':
      return <Table {...rest} />;
    case 'large':
      return <Large {...rest} />;
  }
}

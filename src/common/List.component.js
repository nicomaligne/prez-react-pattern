import React from 'react';
import PropTypes from 'prop-types';
import './List.scss';

function Value({ header, item, name }) {
  if (!header) {
    return;
  }
  switch (header.type) {
    case 'image':
      return <img src={item[header.key]} alt={name} />;
    default:
      return item[header.key];
  }
}
Value.propTypes = {
  header: PropTypes.shape({
    key: PropTypes.string,
    type: PropTypes.string
  }),
  item: PropTypes.object,
  name: PropTypes.string
};

function TableRow({ headers, item }) {
  const nameKey = headers.find(({ type }) => type === 'main').key;
  const name = item[nameKey];
  return (
    <tr>
      {headers.map(header => (
        <td key={header.key} className={`col-${header.type || 'text'}`}>
          <Value header={header} item={item} name={name} />
        </td>
      ))}
    </tr>
  );
}
TableRow.propTypes = {
  header: PropTypes.shape({
    key: PropTypes.string,
    type: PropTypes.string
  }),
  item: PropTypes.object
};

function Table(props) {
  const { collection, headers, title } = props;
  return (
    <table className="list list-table">
      <caption className="sr-only">{title}</caption>
      <thead>
        <tr>
          {headers.map(header => (
            <th key={header.key} className={`col-${header.type || 'text'}`}>
              {header.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {collection.map((item, index) => (
          <TableRow key={index} headers={headers} item={item} />
        ))}
      </tbody>
    </table>
  );
}
TableRow.propTypes = {
  collection: PropTypes.arrayOf(PropTypes.object),
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      type: PropTypes.string
    })
  ),
  title: PropTypes.string
};

function Large(props) {
  const { collection, headers, title } = props;
  const idHeader = headers.find(({ type }) => type === 'id');
  const mainHeader = headers.find(({ type }) => type === 'main');
  const imageHeader = headers.find(({ type }) => type === 'image');
  const otherHeaders = headers.filter(
    header =>
      header !== idHeader && header !== mainHeader && header !== imageHeader
  );

  return (
    <div className="list list-large">
      <h1 className="sr-only">{title}</h1>
      <ul>
        {collection.map((item, index) => (
          <li key={index}>
            <div className="list-large-content">
              <h2>
                <Value
                  header={idHeader}
                  item={item}
                  name={item[mainHeader.key]}
                />
                .
                <Value
                  header={mainHeader}
                  item={item}
                  name={item[mainHeader.key]}
                />
              </h2>
              <dl>
                {otherHeaders.map(header => (
                  <div key={header.key} className="list-large-keyvalue">
                    <dt>{header.label}</dt>
                    <dd>
                      <Value
                        header={header}
                        item={item}
                        name={item[mainHeader.key]}
                      />
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <Value
              header={imageHeader}
              item={item}
              name={item[mainHeader.key]}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
TableRow.propTypes = {
  collection: PropTypes.arrayOf(PropTypes.object),
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      type: PropTypes.string
    })
  ),
  title: PropTypes.string
};

export default function List(props) {
  const { displayMode = 'table', ...rest } = props;
  switch (displayMode) {
    case 'table':
      return <Table {...rest} />;
    case 'large':
      return <Large {...rest} />;
    default:
      return <div>Unknown display mode "{displayMode}"</div>;
  }
}
List.propTypes = {
  displayMode: PropTypes.string,
  collection: PropTypes.arrayOf(PropTypes.object),
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      type: PropTypes.string
    })
  ),
  title: PropTypes.string
};

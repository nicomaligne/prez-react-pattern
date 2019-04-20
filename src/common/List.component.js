import React from "react";
import "./List.scss";

function Value({ header, item, nameKey }) {
  if (!header) {
    return;
  }
  switch (header.type) {
    case "image":
      return <img src={item[header.key]} alt={item[nameKey]} />;
    default:
      return item[header.key];
  }
}

function TableRow({ headers, item }) {
  const nameKey = headers.find(({ type }) => type === "main").key;
  const name = item[nameKey];
  return (
    <tr>
      {headers.map(header => (
        <td className={`col-${header.type || "text"}`}>
          <Value header={header} item={item} name={name} />
        </td>
      ))}
    </tr>
  );
}

function Table(props) {
  const { title, headers, collection } = props;
  return (
    <table className="list list-table">
      <caption className="sr-only">{title}</caption>
      <thead>
        <tr>
          {headers.map(header => (
            <th className={`col-${header.type || "text"}`}>{header.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {collection.map(item => (
          <TableRow headers={headers} item={item} />
        ))}
      </tbody>
    </table>
  );
}

function Large(props) {
  const { title, headers, collection } = props;
  const idHeader = headers.find(({ type }) => type === "id");
  const mainHeader = headers.find(({ type }) => type === "main");
  const imageHeader = headers.find(({ type }) => type === "image");
  const otherHeaders = headers.filter(
    header =>
      header !== idHeader && header !== mainHeader && header !== imageHeader
  );

  return (
    <div className="list list-large">
      <h1 className="sr-only">{title}</h1>
      <ul>
        {collection.map(item => (
          <li>
            <Value
              header={imageHeader}
              item={item}
              name={item[mainHeader.key]}
            />
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
                  <div className="list-large-keyvalue">
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
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function List(props) {
  const { displayMode = "table", ...rest } = props;
  switch (displayMode) {
    case "table":
      return <Table {...rest} />;
    case "large":
      return <Large {...rest} />;
  }
}

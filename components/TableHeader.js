let headers = ['', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', ' Daily Location Total'];

function TableHeader() {
  let headerElements = headers.map(header => {
    <th>{header}</th>
  });
  return (<tr>{headerElements}</tr>)
};

export default TableHeader;

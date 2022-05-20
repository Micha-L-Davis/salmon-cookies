let headers = ['', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', ' Daily Location Total'];

function TableHeader() {
  console.log(headers)
  return (
    <tr>{headers.map(header => (
      <th key={header}>{header}</th>
      ))}
    </tr>
  )
};

export default TableHeader;

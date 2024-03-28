import "../Devices/Devices.css"; // Assuming you have CSS for styling
import { BarChart, Bar, XAxis, YAxis } from "recharts";

const data = [
  { device: "Desktop", percentage: 52 },
  { device: "Tablet", percentage: 15 },
  { device: "Mobile", percentage: 36 },
];

const Devices = () => {
  return (
    <>
      <section className="device-wrapper">
        <div className="top-device">
          <p>Devices</p>
        </div>

        <BarChart width={568} height={150} data={data} layout="vertical">
          <XAxis type="number" hide />
          <YAxis dataKey="device" type="category" hide />
          <Bar dataKey="percentage" fill="#0E1731" barSize={9} />
          {data.map((entry, index) => (
            <text
              key={index}
              x={entry.percentage - 10} // Move text to the right by adding a constant value
              y={index * 45} // Adjust the y position as needed
              dy={10} // Adjust vertical offset
              fill="#000"
              textAnchor="start" // Align text to the start (left)
            >
              {entry.device} ({entry.percentage}%)
            </text>
          ))}
        </BarChart>
      </section>
    </>
  );
};

export default Devices;

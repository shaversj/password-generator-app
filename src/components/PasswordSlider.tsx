import { getTrackBackground, Range } from "react-range";
export default function PasswordSlider({ passwordLength, setPasswordLength }: { passwordLength: number; setPasswordLength: React.Dispatch<React.SetStateAction<number>> }) {
  return (
    <>
      {/*<Range label="Select your value" step={1} min={0} max={100} values={{ passwordLength }} onChange={(values) => setPasswordLength(values)} />*/}
      <Range
        values={[passwordLength]}
        step={1}
        min={0}
        max={20}
        onChange={(values) => setPasswordLength(values[0])}
        renderThumb={({ props }) => (
          <div
            {...props}
            key={props.key}
            style={{
              ...props.style,
              height: "20px",
              width: "20px",
              borderRadius: "50%",
              backgroundColor: "#FFF",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
            }}
          >
            <div
              style={{
                height: "8px",
                width: "8px",
                borderRadius: "50%",
                backgroundColor: "#000",
              }}
            />
          </div>
        )}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "10px",
              width: "100%",
              borderRadius: "4px",
              backgroundColor: getTrackBackground({
                values: [passwordLength],
                colors: ["#A4FFAF", "#E6E5EA"],
                min: 0,
                max: 20,
              }),
              display: "flex",
            }}
          >
            {children}
          </div>
        )}
      />
    </>
  );
}

import { useEffect, useState } from "react";
import Link from "next/link";
import Layout from "../components/Layout";

const IndexPage = () => {
  const [value, setValue] = useState<string>("");
  const [listItem, setListItem] = useState<string[]>([]);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    value && setListItem([...listItem, value]);
    setValue("");
  };
  const onPressDeleteButton = () => {
    setListItem([]);
  };
  useEffect(() => {
    const handleMessage = (_event, args) => alert(args);

    // add a listener to 'message' channel
    global.ipcRenderer.addListener("message", handleMessage);

    return () => {
      global.ipcRenderer.removeListener("message", handleMessage);
    };
  }, []);

  const onSayHiClick = () => {
    global.ipcRenderer.send("message", "hi from next");
  };

  return (
    <>
      <ul>
        {listItem.map((item, index) => (
          <div key={index} style={{ display: "flex", alignItems: "center" }}>
            <input type="checkbox" id={`${index}`} />
            <label htmlFor={`${index}`}>
              <li style={{ listStyle: "none" }}>{item}</li>
            </label>
          </div>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          value={value}
          type="text"
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">追加</button>
      </form>
      <button onClick={() => onPressDeleteButton()}>すべて破棄する</button>
    </>
  );
};

export default IndexPage;

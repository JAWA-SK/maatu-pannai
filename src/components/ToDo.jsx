import { useState, useContext, createContext } from "react";
import History from "./History";
import Form from "./Form";
import Feedback from "./Feedback";
import "../CssFiles/ToDo.css";
import MailUs from "./MailUs";

const SelectedIdContext = createContext();
export function useSelectedId() {
  return useContext(SelectedIdContext);
}
function ToDo() {
  const [selectedId, setSelectedId] = useState(1);

  const history = () => {
    return <History />;
  };
  const nothing = () => {
    return <Form />;
  };
  const mailUs = () => {
    return <MailUs />;
  };
  const feedback = () => {
    return <Feedback />;
  };
  let array = [
    {
      id: 1,
      component: nothing,
    },
    {
      id: 2,
      component: history,
    },
    {
      id: 3,
      component: feedback,
    },
    {
      id: 4,
      component: mailUs,
    },
  ];

  return (
    <div style={{ display: "flex" }}>
      <SelectedIdContext.Provider value={setSelectedId}>
        <div className="formRow">
          {array.map((item, index) => {
            if (item.id === selectedId)
              return (
                <div style={{ height: "50vh" }} key={index}>
                  {item.component()}
                </div>
              );
          })}
        </div>

        <div className="cardContainerToDo">
          <div>
            <div className="cardToDo" onClick={() => setSelectedId(1)}>
              <div className="textCardToDo">Form</div>
            </div>
            <div className="cardToDo" onClick={() => setSelectedId(2)}>
              <div className="textCardToDo">History</div>
            </div>
          </div>
          <div>
            <div className="cardToDo" onClick={() => setSelectedId(3)}>
              <div className="textCardToDo">Feedback</div>
            </div>
            <div className="cardToDo" onClick={() => setSelectedId(2)}>
              <div className="textCardToDo">Your Cart</div>
            </div>
          </div>
        </div>
      </SelectedIdContext.Provider>
    </div>
  );
}

export default ToDo;

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import useFormInput from "../../hooks/useFormInput";

import { maintenanceRequest } from "../../services/cars";
import "./styles.css";

export default function ModalConfirm({ id, handleCancel, ok }) {
  const handleClick = async () => {
    const objReq = {
      _id: id,
      mechanic: mechanic.value,
      inMaintenance: true,
    };
    console.log("Save :", id, mechanic, objReq);
    await maintenanceRequest(objReq);
    ok();
  };
  const mechanic = useFormInput("");
  return (
    <div className="modal-page">
      <div className="modal-form">
        <h3>Put into maintenance</h3>
        <TextField
          id="outlined-basic"
          label="Mechanic"
          variant="outlined"
          {...mechanic}
        />
        <div className="buttons-area">
          <Button variant="outlined" color="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={handleClick}>
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}

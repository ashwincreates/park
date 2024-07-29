import { Modal, ModalClose, ModalDialog, Typography } from "@mui/joy";
import useMasterData from "../../../hooks/useMasterData";

function MasterDataDialog() {
  const { open, toggleOpen } = useMasterData();
  return (
    <Modal
      open={open}
      onClose={toggleOpen}
      disablePortal={true}
      hideBackdrop={true}
      slotProps={{ root: { sx: { position: "absolute" } } }}
    >
      <ModalDialog layout="fullscreen">
        <ModalClose />
        <Typography level="h3">Master Data</Typography>
      </ModalDialog>
    </Modal>
  );
}

export default MasterDataDialog;

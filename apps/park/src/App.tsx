import RenderManager from "./components/renderer/RenderManager";
import Renderer from "./components/renderer/Renderer";
import ComponentDrawer from "./components/ui/componentDrawer/ComponentDrawer";
import InfoDrawer from "./components/ui/infoDrawer/InfoDrawer";
import UILayer from "./components/ui/UILayer";
import AppLayout from "./layouts/AppLayout";
import ComponentProvider from "./providers/ComponentProvider";
import MasterDataProvider from "./providers/MasterDataProvider";
import MasterDataDialog from "./components/ui/masterData/MasterDataDialog";
import NodeProvider from "./providers/NodeProvider";
import EditNode from "./components/ui/editNode/EditNode";

function App() {
  return (
    <NodeProvider>
      <RenderManager>
        <AppLayout>
          <Renderer />
          <ComponentProvider>
            <MasterDataProvider>
              <UILayer />
              <ComponentDrawer />
              <EditNode />
              <InfoDrawer />
              <MasterDataDialog />
            </MasterDataProvider>
          </ComponentProvider>
        </AppLayout>
      </RenderManager>
    </NodeProvider>
  );
}

export default App;

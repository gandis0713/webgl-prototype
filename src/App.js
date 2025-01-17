import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';

import { Switch, Redirect, Route, Link as RouterLink } from 'react-router-dom';

import Triangle from './component/Basic/Triangle/Triangle';
import TriangleInClipSpace from './component/Basic/TriangleInClipSpace/TriangleInClipSpace';
import ObjectOrientation from './component/Basic/ObjectOrientation';
import CameraOrbit from './component/Basic/CameraOrbit';
import FrameBufferRendering from './component/Basic/FrameBufferRendering';
import DirectionLight from './component/Basic/DirectionLight';
import CoordinateSystem from './component/Basic/CoordinateSystem';
import Magnifier from './component/ImageEffect/Magnifier';
import Sharpening from './component/ImageEffect/Sharpening';
import Smoothing from './component/ImageEffect/Smoothing';
import EdgeDetection from './component/ImageEffect/EdgeDetection';
import VolumeSlice from './component/Volume/VolumeSlice';
import Volume3D from './component/Volume/Volume3D';
import HighQualityVolumePrototype from './component/Volume/high-quality-volume-prototype';
import HighQualityVolume from './component/Volume/high-quality-volume';
import MultiVolume3D from './component/Volume/MultiVolume3D';
import SimpleVolume3D from './component/Volume/SimpleVolume3D';
import SphereComponent from './component/Mesh/Sphere';
import Mesh2DOutline1 from './component/Mesh/Mesh2DOutline1';
import Mesh2DOutline2 from './component/Mesh/Mesh2DOutline2';
import Mesh2DOutline3 from './component/Mesh/Mesh2DOutline3';
import OctreeLine from './component/Mesh/OctreeLine';
import Spline from './component/Interpolation/Spline';
import PhongModel from './component/Light/PhongModel';
import EnvironmentMap from './component/Light/EnvironmentMap';
import Reflection from './component/Light/Reflection';
import Refraction from './component/Light/Refraction';
import TextureMipmap from './component/Basic/TextureMipmap';
import DepthRange from './component/Basic/DepthRange';
import ZBuffer from './component/Basic/ZBuffer';
import DepthPicking from './component/Interaction/DepthPicking';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
  },
  toolbar: theme.mixins.toolbar,
}));

function App() {
  const classes = useStyles();
  const [imageEffectExpand, setImageEffectExpand] = useState(false);
  const [lightExpand, setLightExpand] = useState(false);
  const [basicExpand, setBasicExpand] = useState(false);
  const [meshExpand, setMeshExpand] = useState(false);
  const [volumeExpand, setVolumeExpand] = useState(false);
  const [interpolationExpand, setInterpolationExpand] = useState(false);
  const [interactionExpand, setInteractionExpand] = useState(false);

  const onExpandBasic = (event) => {
    event.preventDefault();
    setBasicExpand(!basicExpand);
  };

  const onExpandLight = (event) => {
    event.preventDefault();
    setLightExpand(!lightExpand);
  };

  const onExpandImageEffect = (event) => {
    event.preventDefault();
    setImageEffectExpand(!imageEffectExpand);
  };
  const onExpandMesh = (event) => {
    event.preventDefault();
    setMeshExpand(!meshExpand);
  };

  const onExpandVolume = (event) => {
    event.preventDefault();
    setVolumeExpand(!volumeExpand);
  };

  const onExpandInterpolation = (event) => {
    event.preventDefault();
    setInterpolationExpand(!interpolationExpand);
  };

  const onExpandInteraction = (event) => {
    event.preventDefault();
    setInteractionExpand(!interactionExpand);
  };

  return (
    <div>
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" noWrap>
              WebGL Tutorial
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.toolbar} />
          <Divider />
          <List
            subheader={
              <ListSubheader>
                Basic
                <IconButton onClick={onExpandBasic}>
                  {basicExpand ? <ExpandLess /> : <ExpandMore />}
                </IconButton>
              </ListSubheader>
            }
          >
            <Collapse in={basicExpand} timeout="auto" unmountOnExit={false}>
              <ListItem button key={0} component={RouterLink} to="/Bacis_Triangle">
                Triangle
              </ListItem>
              <ListItem button key={1} component={RouterLink} to="/Bacis_TriangleInClipSpace">
                TriangleInClipSpace
              </ListItem>
              <ListItem button key={2} component={RouterLink} to="/Bacis_ObjectOrientation">
                Object Orientation
              </ListItem>
              <ListItem button key={3} component={RouterLink} to="/Bacis_CameraOrbit">
                Camera Orbit
              </ListItem>
              <ListItem button key={4} component={RouterLink} to="/Bacis_FrameBufferRendering">
                FrameBuffer Rendering
              </ListItem>
              <ListItem button key={5} component={RouterLink} to="/Bacis_DirectionLight">
                Direction Light
              </ListItem>
              <ListItem button key={6} component={RouterLink} to="/Bacis_CoordinateSystem">
                Coordinate System
              </ListItem>
              <ListItem button key={7} component={RouterLink} to="/Bacis_TextureMipmap">
                Texture Mipmap
              </ListItem>
              <ListItem button key={8} component={RouterLink} to="/Bacis_DepthRange">
                Depth Range
              </ListItem>
              <ListItem button key={9} component={RouterLink} to="/Bacis_ZBuffer">
                ZBuffer
              </ListItem>
            </Collapse>
          </List>
          <Divider />
          <List
            subheader={
              <ListSubheader>
                Light
                <IconButton onClick={onExpandLight}>
                  {lightExpand ? <ExpandLess /> : <ExpandMore />}
                </IconButton>
              </ListSubheader>
            }
          >
            <Collapse in={lightExpand} timeout="auto" unmountOnExit={false}>
              <ListItem button key={0} component={RouterLink} to="/Light_PhongModel">
                Phong Light Model
              </ListItem>
              <ListItem button key={1} component={RouterLink} to="/Light_EnvironmentMap">
                Enviroment Map
              </ListItem>
              <ListItem button key={2} component={RouterLink} to="/Light_Reflection">
                Reflection
              </ListItem>
              <ListItem button key={3} component={RouterLink} to="/Light_Refraction">
                Refraction
              </ListItem>
            </Collapse>
          </List>
          <Divider />
          <List
            subheader={
              <ListSubheader>
                Image Effect
                <IconButton onClick={onExpandImageEffect}>
                  {imageEffectExpand ? <ExpandLess /> : <ExpandMore />}
                </IconButton>
              </ListSubheader>
            }
          >
            <Collapse in={imageEffectExpand} timeout="auto" unmountOnExit={false}>
              <ListItem button key={0} component={RouterLink} to="/Convolution_Magnifier">
                Magnifier
              </ListItem>
              <ListItem button key={1} component={RouterLink} to="/Convolution_Sharpening">
                Sharpening
              </ListItem>
              <ListItem button key={2} component={RouterLink} to="/Convolution_Smoothing">
                Smoothing
              </ListItem>
              <ListItem button key={3} component={RouterLink} to="/Convolution_EdgeDetection">
                Edge Detection
              </ListItem>
            </Collapse>
          </List>
          <Divider />
          <List
            subheader={
              <ListSubheader>
                Interpolation
                <IconButton onClick={onExpandInterpolation}>
                  {interpolationExpand ? <ExpandLess /> : <ExpandMore />}
                </IconButton>
              </ListSubheader>
            }
          >
            <Collapse in={interpolationExpand} timeout="auto" unmountOnExit={false}>
              <ListItem button key={0} component={RouterLink} to="/Interpolation_Spline">
                Spline 2D
              </ListItem>
            </Collapse>
          </List>
          <Divider />
          <List
            subheader={
              <ListSubheader>
                Interaction
                <IconButton onClick={onExpandInteraction}>
                  {interactionExpand ? <ExpandLess /> : <ExpandMore />}
                </IconButton>
              </ListSubheader>
            }
          >
            <Collapse in={interactionExpand} timeout="auto" unmountOnExit={false}>
              <ListItem button key={0} component={RouterLink} to="/Interaction_DepthPicking">
                Depth Picking
              </ListItem>
            </Collapse>
          </List>
          <Divider />
          <List
            subheader={
              <ListSubheader>
                Mesh
                <IconButton onClick={onExpandMesh}>
                  {meshExpand ? <ExpandLess /> : <ExpandMore />}
                </IconButton>
              </ListSubheader>
            }
          >
            <Collapse in={meshExpand} timeout="auto" unmountOnExit={false}>
              <ListItem button key={0} component={RouterLink} to="/Mesh_Sphere">
                Sphere
              </ListItem>
              <ListItem button key={1} component={RouterLink} to="/Mesh_Mesh2DOutline1">
                Mesh 2D Outline 1
              </ListItem>
              <ListItem button key={2} component={RouterLink} to="/Mesh_Mesh2DOutline2">
                Mesh 2D Outline 2
              </ListItem>
              <ListItem button key={3} component={RouterLink} to="/Mesh_Mesh2DOutline3">
                Mesh 2D Outline 3
              </ListItem>
              <ListItem button key={4} component={RouterLink} to="/Mesh_OctreeLine">
                Octree Line
              </ListItem>
            </Collapse>
          </List>
          <Divider />
          <List
            subheader={
              <ListSubheader>
                Volume
                <IconButton onClick={onExpandVolume}>
                  {volumeExpand ? <ExpandLess /> : <ExpandMore />}
                </IconButton>
              </ListSubheader>
            }
          >
            <Collapse in={volumeExpand} timeout="auto" unmountOnExit={false}>
              <ListItem button key={0} component={RouterLink} to="/Volume_VolumeSlice">
                Volume Slice
              </ListItem>
              <ListItem button key={1} component={RouterLink} to="/Volume_SimpleVolume3D">
                Simple Volume 3D
              </ListItem>
              <ListItem button key={2} component={RouterLink} to="/Volume_Volume3D">
                Volume 3D
              </ListItem>
              <ListItem
                button
                key={3}
                component={RouterLink}
                to="/Volume_HighQualityVolumePrototype"
              >
                High Quality Volume 3D Prototype
              </ListItem>
              <ListItem button key={4} component={RouterLink} to="/Volume_HighQualityVolume">
                High Quality Volume 3D
              </ListItem>
              <ListItem button key={5} component={RouterLink} to="/Volume_MultiVolume3D">
                Multi Volume 3D
              </ListItem>
            </Collapse>
          </List>
          <Divider />
        </Drawer>
        <div className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            <Route exact path="/Bacis_Triangle" component={Triangle} />
            <Route exact path="/Bacis_TriangleInClipSpace" component={TriangleInClipSpace} />
            <Route exact path="/Bacis_ObjectOrientation" component={ObjectOrientation} />
            <Route exact path="/Bacis_CameraOrbit" component={CameraOrbit} />
            <Route exact path="/Bacis_FrameBufferRendering" component={FrameBufferRendering} />
            <Route exact path="/Bacis_DirectionLight" component={DirectionLight} />
            <Route exact path="/Bacis_CoordinateSystem" component={CoordinateSystem} />
            <Route exact path="/Bacis_TextureMipmap" component={TextureMipmap} />
            <Route exact path="/Bacis_DepthRange" component={DepthRange} />
            <Route exact path="/Bacis_ZBuffer" component={ZBuffer} />

            <Route exact path="/Light_PhongModel" component={PhongModel} />
            <Route exact path="/Light_EnvironmentMap" component={EnvironmentMap} />
            <Route exact path="/Light_Reflection" component={Reflection} />
            <Route exact path="/Light_Refraction" component={Refraction} />

            <Route exact path="/Convolution_Magnifier" component={Magnifier} />
            <Route exact path="/Convolution_Sharpening" component={Sharpening} />
            <Route exact path="/Convolution_Smoothing" component={Smoothing} />
            <Route exact path="/Convolution_EdgeDetection" component={EdgeDetection} />

            <Route exact path="/Interpolation_Spline" component={Spline} />

            <Route exact path="/Interaction_DepthPicking" component={DepthPicking} />

            <Route exact path="/Mesh_Sphere" component={SphereComponent} />
            <Route exact path="/Mesh_Mesh2DOutline1" component={Mesh2DOutline1} />
            <Route exact path="/Mesh_Mesh2DOutline2" component={Mesh2DOutline2} />
            <Route exact path="/Mesh_Mesh2DOutline3" component={Mesh2DOutline3} />
            <Route exact path="/Mesh_OctreeLine" component={OctreeLine} />

            <Route exact path="/Volume_VolumeSlice" component={VolumeSlice} />
            <Route exact path="/Volume_Volume3D" component={Volume3D} />
            <Route
              exact
              path="/Volume_HighQualityVolumePrototype"
              component={HighQualityVolumePrototype}
            />
            <Route exact path="/Volume_HighQualityVolume" component={HighQualityVolume} />
            <Route exact path="/Volume_SimpleVolume3D" component={SimpleVolume3D} />
            <Route exact path="/Volume_MultiVolume3D" component={MultiVolume3D} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;

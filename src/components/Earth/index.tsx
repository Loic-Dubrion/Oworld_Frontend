/* eslint-disable no-nested-ternary */

import { useMediaQuery } from 'react-responsive';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../GlobalRedux/hooks';
import { fetchEarthData } from '../../GlobalRedux/store/reducers/planet';
import EarthInfos from '../EarthInfos';

import SimpleLoader from '../SimpleLoader';

export default function Earth() {
  const dispatch = useAppDispatch();
  const isSideBarOpen = useAppSelector((state) => state.home.sideBar);
  const planetWidth = useAppSelector((state) => state.home.currentWidth);
  const loading = useAppSelector((state) => state.planet.loading);
  const earthData = useAppSelector((state) => state.planet.earthData);
  const isLargeScreen = useMediaQuery({ minWidth: 1024 });

  useEffect(() => {
    dispatch(fetchEarthData());
  }, [dispatch]);

  return loading ? (
    <SimpleLoader />
  ) : (
    <div
      className="p-8 orbitron-font flex flex-col items-center justify-center w-full gap-5"
      style={
        isSideBarOpen
          ? isLargeScreen
            ? { width: planetWidth, float: 'right' }
            : { width: '100%', float: 'none' }
          : {}
      }
    >
      <div className="xl:max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-7xl gradient-text font-bold tracking-widest leading-tight">
          Earth
        </h1>
      </div>
      <p className="px-4 md:px-16 mb-4 text-justify">
        Earth is the third planet from the Sun and the only known planet to
        harbor life. Its atmosphere is composed of nitrogen, oxygen, and other
        trace gases. Earth has diverse ecosystems, landforms, and climates, and
        it has one natural satellite, the Moon.
      </p>
      <EarthInfos earthData={earthData} />
    </div>
  );
}

import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application, EventData, Frame, GridLayout } from '@nativescript/core'

import { AppRootViewModel } from './app-root-view-model'

export function onLoaded(args: EventData): void {
  const drawerComponent = <RadSideDrawer>args.object
  drawerComponent.bindingContext = new AppRootViewModel();
  setTimeout(() => drawerComponent.showDrawer(), 100);
  // console.log('loaded');
  
}

export function onNavigationItemTap(args: EventData): void {
  const component = <GridLayout>args.object;
  // (args.object as any).requestLayout();
  const componentRoute = component.get('route')
  const componentTitle = component.get('title')
  const bindingContext = <AppRootViewModel>component.bindingContext

  bindingContext.selectedPage = componentTitle

  Frame.topmost().navigate({
    moduleName: componentRoute,
    transition: {
      name: 'fade',
    },
  })

  const drawerComponent = <RadSideDrawer>Application.getRootView()
  drawerComponent.closeDrawer()
}

export function layoutchange(evt) {
  // setTimeout(() => {
  //   console.log(evt.object);
  //   // evt.object.requestLayout();
  //   evt.object.ios.setNeedsLayout();
  // }, 100);
  
  console.log('LAYOUTCHANGE');
}

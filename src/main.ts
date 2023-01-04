import { Application, Trace } from '@nativescript/core';

Trace.enable();
Trace.setCategories(Trace.categories.Layout);

Application.run({ moduleName: 'app-root/app-root' })

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/

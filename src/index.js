import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from 'react-intl';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";
import JobsList from "./components/jobslist";

const locale = navigator.language.startsWith('es') ? 'es-ES' : 'en-US';
const messages = locale.startsWith('es') ? localeEsMessages : localeEnMessages;

ReactDOM.render(
  <IntlProvider locale={locale} messages={messages}>
    <JobsList />
  </IntlProvider>,
  document.getElementById("root")
);

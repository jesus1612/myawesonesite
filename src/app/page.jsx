"use client"

import RootLayout from "./layout.jsx"
// Typography
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import SignIn from "./signIn/SignIn.jsx";

export default function MyApp() {
  return (
    <RootLayout>
      <SignIn></SignIn>
    </RootLayout>
  );
}

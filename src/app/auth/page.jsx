'use client';

import { useFormStatus, useFormState } from 'react-dom';
import { loginAction } from '@/server-actions/login';

import Footer from '@/components/footer';
import Header from '@/components/header';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { signupAction } from '@/server-actions/signup';

export default function LoginCard() {
  const [loginState, loginFormAction] = useFormState(loginAction, null);
  const [signupState, signupFormAction] = useFormState(signupAction, null);

  return (
    <>
      <Header />

      <main className="w-full py-8 px-4 flex justify-center items-center">
        <Tabs defaultValue="login" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Signup</TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <Card>
              <form action={loginFormAction}>
                <CardHeader>
                  <CardTitle>Login</CardTitle>
                  {/* <CardDescription>Please login once</CardDescription> */}
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      name="email"
                      id="email"
                      type="email"
                      placeholder="your-name@example.com"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="login-password">Password</Label>
                    <Input
                      name="password"
                      id="login-password"
                      type="password"
                      placeholder="*******"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <SubmitButton />
                </CardFooter>
              </form>
            </Card>
          </TabsContent>

          <TabsContent value="signup">
            <Card>
              <form action={signupFormAction}>
                <CardHeader>
                  <CardTitle>Signup</CardTitle>
                  {/* <CardDescription>Please login once</CardDescription> */}
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      name="name"
                      id="name"
                      type="text"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      name="email"
                      id="email"
                      type="email"
                      placeholder="your-name@example.com"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="signup-password-1">Password</Label>
                    <Input
                      name="password"
                      id="signup-password-1"
                      type="password"
                      placeholder="*******"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="signup-password-2">Password again</Label>
                    <Input
                      name="password2"
                      id="signup-password-2"
                      type="password"
                      placeholder="*******"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <SubmitButton />
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </>
  );
}

const SubmitButton = () => {
  const status = useFormStatus();
  return (
    <Button variant={status.pending ? 'disabled' : 'default'} type="Submit">
      <span>Submit</span>{' '}
      {status.pending && (
        <i className="fi fi-rr-spinner animate-spin flex justify-center items-center ml-4"></i>
      )}
    </Button>
  );
};

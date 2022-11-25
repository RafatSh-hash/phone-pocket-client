import React from "react";
// import useTitle from "../../Hooks/useTitle";
import "aos/dist/aos.css";
import AOS from "aos";

const Blog = () => {
  AOS.init({ duration: 500 });
  // useTitle("Blog");
  //Blog Page Ques And Answers
  return (
    <div data-aos="fade-up" className="p-5 mt-0">
      {/* <h1>Hello Blog</h1> */}
      <div
        data-aos="fade-right"
        id="div1"
        className="border-4 border-slate-900 border-double  to-gray-300 shadow-gray-700 shadow-2xl rounded-2xl p-8 text-left w-5/6 mx-auto mt-10"
      >
        <h3 className="font-semibold ">
          Ques : What are the different ways to manage
          <span className="text-red-500"> State</span>state in React ?
        </h3>
        <p className="my-6">
          <span className="underline">Ans</span> : In React apps, there are
          several ways to handle the state. Let us briefly explore a few of them
          in this part.Keeping such data in the URL allows users to share deep
          links with others. It is recommended to avoid storing such information
          in the app’s state to avoid the URL in our app getting out of sync.
          The URL should be used as the system of record, Read from it as needed
          for information related to sorting, pagination, etc. Update the URL as
          required when the settings change React Router is a great tool to
          handle routes and manage the params. <br />
          The second option is to store the state in the browser via web
          storage. This is useful when we want to persist state between reloads
          and reboots. Examples include cookies, local storage, and IndexedDB.
          These are native browser technologies. Data persisted in the browser
          is tied to a single browser. So, if the user loads the site in a
          different browser, the data will not be available. We avoid storing
          sensitive data in the browser since the user may access the app on a
          shared machine. Some examples of where web storage might be most
          useful include storing a user’s shopping cart, saving partially
          completed form data or storing JWT token in HttpOnly Cookie. <br />
          The third option is to use store state locally. It is useful when one
          component needs the state. Examples include a toggle button, a form,
          etc. <br />
          The Fourth option is to define the state in the parent component.
          Often, the same state is used across multiple components. In those
          cases, it is useful to lift the state to a common parent. The lifting
          state is a two‑step process. First, we declare the state in a common
          parent component, and then we pass the state down to child components
          via props. This pattern should be considered any time a few related
          components need to use the same state. The lifting state avoids
          duplicating states in multiple components. It helps to assure that our
          components all consistently reflect the same state. <br />
          The fifth option is to compute the new state based on the available
          state and we do not need to declare a state at all. If there are
          existing values that can be composed to give us the information we
          need, then we can calculate that information on each render instead of
          storing it. Some examples include calling .length on an array to
          determine the number of records instead of storing a separate numItems
          variable in the state or deriving an errorsExist boolean by checking
          if the errors array is empty. So, why bother deriving the state? Well,
          deriving the state avoids our state values getting out of sync. It
          simplifies our code since we do not have to remember to keep separate
          values in sync. When we update the state, derived values are
          automatically recalculated in the render.
        </p>
      </div>
      <div
        data-aos="fade-left"
        className="border-4 border-slate-900 border-double  shadow-gray-700 shadow-2xl rounded-2xl p-8 text-left w-5/6 mx-auto mt-10"
      >
        <h3 className="font-semibold ">
          Ques : How does
          <span className="text-red-500"> Prototypical Inheritense</span> work ?
        </h3>
        <p className="my-6">
          <span className="underline">Ans</span> : The Prototypal Inheritance is
          a feature in javascript used to add methods and properties in objects.
          It is a method by which an object can inherit the properties and
          methods of another object. Traditionally, in order to get and set the
          [[Prototype]] of an object, we use Object. In a class-based model, you
          have Classes, which are represented by the triple “Parents, Variables,
          Methods”. Where: Parents is the list of classes you’re extending.
          Classes may only extend other classes; Variables is the number of
          variable slots that instances will have. For example, a “class
          Point2d(int x, int y) has 2 instance variables; Methods is a table of
          “name → function” that describes which services each instance of the
          class will support; Instances (or Objects) in a class-based model are
          represented with the tuple “Class, Values”. Where: Class is a pointer
          to the class triple that defines how many variables this instance
          supports, and what methods you can call on it; Values is a list of the
          values for each variable the instance has. In this model, Classes only
          describe how instances look like, and Instances are the only thing you
          can interact with. Classes cannot be instances, and you can’t inherit
          from Instances.Then the complete set of ClassB methods is toString,
          add . It’s the union of all methods from the parents (generally with
          things to the right being chosen when there’s a conflict). There are
          some languages that support the notion of Classes which can also be
          instances, like Ruby and Python. Python actually uses the model I’m
          going to describe later. Ruby uses evil black magic and you’ll wish
          you had never looked if you try prying under the hood .
        </p>
      </div>
      <div
        data-aos="fade-right"
        className="border-4 border-slate-900 border-double shadow-gray-700 shadow-2xl rounded-2xl p-8 text-left w-5/6 mx-auto mt-10"
      >
        <h3 className="font-semibold ">
          Ques : What is
          <span className="text-red-500"> Unit Test </span> and why should we
          write Unit Test ?
        </h3>
        <p className="my-6">
          <span className="underline">Ans</span> : Unit testing is a type of
          software testing where individual units or software components are
          tested. Its purpose is to validate that each unit of code performs as
          expected. A unit can be anything you want it to be — a line of code, a
          method, or a class. Generally, smaller tests are better as they give a
          more granular view of your code’s performance. Also, when you test
          very small units, your tests can run fast, like a thousand tests in a
          second fast.There are two types of unit testing: Manual: As the name
          implies, unit tests are run manually to verify the correctness of your
          code. This is done before writing automated tests. Its drawback is
          that you have to manually test your functions/classes whenever you
          make changes to them. Automated: This is the preferred unit testing
          method as it can be carried out by simply running a script. Automated
          tests also make it easier to run tests when your application scales.
          To justify any effort in business, there must be a positive impact on
          the bottom line. Here are a few benefits to writing unit tests: Unit
          tests save time and money. Usually, we tend to test the happy path
          more than the unhappy path. If you release such an app without
          thorough testing, you would have to keep fixing issues raised by your
          potential users. The time to fix these issues could’ve been used to
          build new features or optimize the existing system. Bear in mind that
          fixing bugs without running tests could also introduce new bugs into
          the system. Well-written unit tests act as documentation for your
          code. Any developer can quickly look at your tests and know the
          purpose of your functions. It simplifies the debugging process. Unit
          testing is an integral part of extreme programming. Extreme
          programming is basically a “test-everything-that-can-possibly-break”
          programming strategy. Unit tests make code reuse easier. If you want
          to reuse existing code in a new project, you can simply migrate both
          the code and tests to your new project, then run your tests to make
          sure you have the desired results. Unit testing improves code
          coverage. A debatable topic is to have 100% code coverage across your
          application. In the testing pyramid, unit tests are faster than
          integration and end-to-end. They are more assertive and return quick
          feedback.
        </p>
      </div>
      <div
        data-aos="fade-left"
        className="border-4 border-slate-900 border-double  shadow-gray-700 shadow-2xl rounded-2xl p-8 text-left w-5/6 mx-auto mt-10"
      >
        <h3 className="font-semibold ">
          Ques : What Are the difference between
          <span className="text-red-500"> React </span>,{" "}
          <span className="text-red-500"> Angular </span>,{" "}
          <span className="text-red-500"> Vue </span> ?
        </h3>
        <p className="my-6">
          <span className="underline">Ans</span> : If the choice you’re making
          is based on Angular vs React alone, then you’ll simply need to
          consider the pros and cons discussed for those libraries in this post.
          But overall, keep in mind that both libraries can be used for mobile
          and web apps, while Angular is generally better for more complex apps
          that are enterprise-ready. React often requires extra modules and
          components, which keeps the core library small, but means there’s
          extra work involved when incorporating outside tools. Angular, on the
          other hand, is more of a full-fledged solution that doesn’t require
          extras like React often does, though it does have a steeper learning
          curve for its core compared to React. React is more suitable for
          intermediate to advanced JavaScript developers who are familiar with
          concepts from ES6 and up, while Angular favors those same developers
          who are also familiar with TypeScript. <br />
          The choice between React vs Vue is often debated and it’s not an easy
          one. Vue has a vibrant and ever-growing community and has taken over
          popularity vs. React in many respects. React developers are still
          churning out lots of new components and extras, so there’s no sign
          that React is on the decline either. Vue is generally more suited to
          smaller, less complex apps and is easier to learn from scratch
          compared to React. Vue can be easier to integrate into new or existing
          projects and many feel its use of HTML templates along with JSX is an
          advantage. Overall, Vue might be the best choice if you’re a newer
          developer and not as familiar with advanced JavaScript concepts, while
          React is quite well suited for experienced programmers and developers
          who have worked with object-oriented JavaScript, functional
          JavaScript, and similar concepts. <br />
          In most cases, you probably wouldn’t be deciding between only Angular
          and Vue. They are vastly different libraries with very different
          feature sets and learning curves. Vue is the clear choice for less
          experienced developers, and Angular would be preferred for those
          working on larger apps. A large library like Angular would require
          more diligence in keeping up with what’s new, while Vue would be less
          demanding in this regard and the fact that the two most recent major
          releases of Vue are in separate repositories helps. It should also be
          noted that Vue was created by a developer who formerly worked on
          Angular for Google, so that’s another thing to keep in mind, though
          that wouldn’t have a huge impact on your decision.
        </p>
      </div>
    </div>
  );
};

export default Blog;

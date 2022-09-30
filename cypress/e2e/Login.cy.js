/* eslint-disable jest/expect-expect */
/* global cy */
describe("Auth", () => {
  it("Route '/' redirects to '/login'", () => {
    cy.visit("http://localhost:3000/");
    cy.location().should((location) => {
      expect(location.pathname).to.eq("/login");
    });
  });
  it("Wrong credentials can't access", () => {
    cy.get("#email").clear();
    cy.get("#email").type("error@error.com");
    cy.get("#password").clear();
    cy.get("#password").type("wrong");
    cy.get("#submit").click();
    cy.location().should((location) => {
      expect(location.pathname).to.eq("/login");
    });
  });
  it("Correct credentials redirects to '/'", () => {
    cy.get("#email").clear();
    cy.get("#password").clear();
    cy.get("#email").type("admin@example.com");
    cy.get("#password").type("example");
    cy.get("#submit").click();
    cy.location().should((location) => {
      expect(location.pathname).to.eq("/");
    });
  });
});

describe("Routing", () => {
  it("Rooms redirects to '/rooms'", () => {
    cy.contains(" Rooms").click();
    cy.location().should((location) => {
      expect(location.pathname).to.eq("/rooms");
    });
  });
  it("Bookings redirects to '/bookings'", () => {
    cy.contains(" Bookings").click();
    cy.location().should((location) => {
      expect(location.pathname).to.eq("/bookings");
    });
  });
  it("Users redirects to '/users'", () => {
    cy.contains(" Users").click();
    cy.location().should((location) => {
      expect(location.pathname).to.eq("/users");
    });
  });
  it("Contact redirects to '/contact'", () => {
    cy.contains(" Contact").click();
    cy.location().should((location) => {
      expect(location.pathname).to.eq("/contact");
    });
  });
  it("Dashboard redirects to '/'", () => {
    cy.get("#dashboard").click();
    cy.location().should((location) => {
      expect(location.pathname).to.eq("/");
    });
  });
});

/*
Run this once updated
describe("Routing", () => {
  it("Rooms redirects to '/rooms'", () => {
    cy.get("#rooms").click();
    cy.location().should((location) => {
      expect(location.pathname).to.eq("/rooms");
    });
  });
  it("Bookings redirects to '/bookings'", () => {
    cy.get("#bookings").click();
    cy.location().should((location) => {
      expect(location.pathname).to.eq("/bookings");
    });
  });
  it("Users redirects to '/users'", () => {
    cy.get("#users").click();
    cy.location().should((location) => {
      expect(location.pathname).to.eq("/users");
    });
  });
  it("Contact redirects to '/contact'", () => {
    cy.get("#contact").click();
    cy.location().should((location) => {
      expect(location.pathname).to.eq("/contact");
    });
  });
  it("Dashboard redirects to '/'", () => {
    cy.get("#dashboard").click();
    cy.location().should((location) => {
      expect(location.pathname).to.eq("/");
    });
  });
});
*/
# CAP-036 room reservations and presentations: unpublished copy

**Status:** draft only. Do not turn this document into a route, navigation item, sitemap entry or search result while the production feature toggle is `admin_only`.

## Dutch

- **Future route:** `/voor-accommodatiebeheer/`
- **Title:** Voor accommodatiebeheer — Rondo
- **Description:** Rondo voor accommodatiebeheer: bekijk beschikbaarheid, voorkom dubbele reserveringen en gebruik een gekoppeld Club TV-scherm tijdens een geldige boeking.
- **Kicker:** Voor jouw rol
- **Role title:** Accommodatiebeheer
- **Introduction:** Maak clubruimtes beschikbaar voor het juiste overleg zonder losse agenda’s of onbeheerde presentatieschermen. Rondo combineert beschikbaarheid, reserveringen, beheerblokkades en tijdelijk presentatierecht in één gecontroleerde flow.

### Wat je hiermee oplost

- Bekijk per dag welke actieve ruimtes vrij zijn en filter op capaciteit en voorzieningen.
- Vrijwilligers met een actuele commissie- of teamstafrol reserveren voor hun eigen commissie of jaarlaag; alleen speler zijn geeft geen reserveringsrecht.
- Rondo weigert overlappende reserveringen. Verlengen kan alleen als de volgende boeking niet wordt geraakt.
- De reserveringshouder ziet de eigen boekingen, kan een kalenderbestand downloaden en kan extra presentatoren toevoegen. Beschikbaarheid voor anderen bevat geen naam, doel of privénotities.
- Heeft de ruimte een gekoppeld Club TV-scherm, dan verschijnt Presenteren alleen tijdens de actieve reservering voor de houder en aangewezen presentatoren.
- Vanuit Chrome of Edge deel je een tabblad, venster of volledig scherm. Club TV pauzeert tijdens de sessie en hervat daarna de normale afspeellijst.

### Cards

- **Zonder dubbelboekingen:** Beschikbaarheid, server-side conflictcontrole en beheerblokkades houden één betrouwbare planning in stand.
- **Privacy per rol:** Alleen de houder en bevoegde beheerders zien reserveringsdetails; de algemene beschikbaarheid blijft persoonsvrij.
- **Tijdelijk presentatierecht:** Een gekoppeld scherm accepteert de ingelogde houder of extra presentator alleen binnen het geldige reserveringsvenster.

### Pilot boundary

Deze functie is nog niet algemeen beschikbaar. Publiceer de bovenstaande productcopy pas nadat de beoogde rol in productie kan reserveren en een echte laptop → Rondo Player → TV-test op het clubnetwerk is geslaagd. Beloof geen AirPlay of Miracast; de huidige flow gebruikt Chrome of Edge en WebRTC.

## English

- **Future route:** `/en/for-accommodation-manager/`
- **Title:** For accommodation managers — Rondo
- **Description:** Rondo for accommodation managers: view availability, prevent double bookings and use a linked Club TV screen during a valid reservation.
- **Kicker:** For your role
- **Role title:** Accommodation management
- **Introduction:** Make club rooms available for the right meetings without separate calendars or uncontrolled presentation screens. Rondo combines availability, reservations, management blocks and temporary presentation entitlement in one controlled flow.

### What this solves

- See which active rooms are available each day and filter by capacity and facilities.
- Volunteers with a current committee or team-staff role reserve for their own committee or age group; being a player alone does not grant booking rights.
- Rondo rejects overlapping reservations. An extension only succeeds when it does not affect the next booking.
- The reservation holder sees their own bookings, can download a calendar file and can add extra presenters. Availability shown to others contains no name, purpose or private notes.
- When a room has a linked Club TV screen, Present only becomes available during the active reservation for the holder and designated presenters.
- From Chrome or Edge, share a tab, window or full screen. Club TV pauses during the session and resumes its normal playlist afterwards.

### Cards

- **No double bookings:** Availability, server-side conflict checks and management blocks maintain one reliable schedule.
- **Privacy by role:** Only the holder and authorized managers see reservation details; general availability remains free of personal data.
- **Temporary presentation entitlement:** A linked screen accepts the signed-in holder or extra presenter only within the valid reservation window.

### Pilot boundary

This feature is not generally available yet. Publish the product copy above only after the intended production role can book and a real laptop → Rondo Player → TV test succeeds on the club network. Do not promise AirPlay or Miracast; the current flow uses Chrome or Edge and WebRTC.

## Publication gate

All items below must pass before creating the routes:

1. Change the production toggle from `admin_only` only for a controlled pilot with the intended role.
2. Verify availability, eligibility, a successful reservation, an overlap rejection, editing, cancellation, extension and calendar export in that role’s authenticated UI.
3. Verify that another signed-in user sees availability but not holder, purpose or private notes.
4. Complete start, stop and automatic hand-back on a real laptop, Rondo Player and TV on the club network.
5. Test holder and extra-presenter access, an unauthorized user, the reservation start/end boundaries and the next-booking boundary.
6. Record browser support, accessibility findings and whether the club’s guest or VLAN separation requires TURN.

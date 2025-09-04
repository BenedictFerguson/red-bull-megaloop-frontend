<p align="center">
    <a href="" target="_blank">
        <img src="https://img.redbull.com/redbullcom/static/redbullcom-logo_double-with-text.svg" width="400" alt="Red Bull Logo">
    </a>
</p>

<p align="center" style="width: 100%;">
    <a href="">
        <h1 style="text-align: center;">Red Bull Cerro Abajo Frontend</h1>
    </a>
</p>

## About Red Bull Cerro Abajo Frontend

Red Bull Cerro Abajo is an event where riders take to the streets for an Urban biking race.

The objective is to bring the event to the Red Bull .Com event pages in real-time, allowing spectators
to follow the action as it happens. The components in this repo aim to provide a seamless display of
the live scoring system tracking the event. This repo contains the code for frontend of the Red Bull
Cerro Abajo, the live scoring backend repo can be found
[here](https://github.com/entrostat/red-bull-cliff-diving).

## Getting Started

Before you begin, please make sure you have access to all the different systems and files. You can contact the following
to get access:

- [Red Bull Developers Group](mailto:redbull-developers@entrostat.com)

You will need access to the following:

- [ClickUp Space](https://app.clickup.com/3394603/v/dc/37k1b-102895/37k1b-67535)
- Google Workspace Group
- 1Password Group

## Pre-requisites

You'll need to have the following installed on your machine:

- [1Password CLI](https://developer.1password.com/docs/cli/get-started/)
- [fnm](https://github.com/Schniz/fnm)
- [taskfile](https://taskfile.dev/)
- [Biome Webstorm Plugin](https://plugins.jetbrains.com/plugin/22761-biome)

To ensure that biome is set up for the project, go to your IDE settings, search for biome and select the executable
in the root node_modules and the biome.json file in the route. Then update your actions on save to run biome.

## Testing

### Mock Data Testing

You can use the following functions to mock data for testing purposes. This will help you if want to quickly visualise
the data in the frontend.
Call the function in the respective page component in the `useEffect` hook.

* State of Play Component

```typescript
function mockSocketUpdate() {
    setComponentState(StateOfPlayComponentState.LOADING);
    const mockSocketUpdateResponse =
        mockSocketDataUpdateInProgressQualifiersLiveAthlete();
    EventService.getInstance().processUpdate(mockSocketUpdateResponse);
    setTimeout(() => {
        setComponentState(StateOfPlayComponentState.SUCCESS);
    }, 3000);
}
```

* Live Standings Component

```typescript
function mockSocketUpdate() {
    setComponentState(LiveStandingsComponentState.LOADING);
    const mockSocketUpdateResponse =
        mockSocketDataUpdateInProgressQualifiersLiveAthlete();
    EventService.getInstance().processUpdate(mockSocketUpdateResponse);
    setTimeout(() => {
        setComponentState(LiveStandingsComponentState.SUCCESS);
    }, 3000);
}
```
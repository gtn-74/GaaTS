```typescript
export const SidebarRoot = styled(Drawer)<{ open: boolean }>(
  ({ theme, open }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    flexShrink: 0,
    whitespace: "nowrap",
    boxSizing: "border-box",

    "& .MuiDrawer-paper": {
      width: open ? "271px" : `calc(${theme.spacing(7)} + 1px)`,
      position: "unset",
      backgroundColor: "#eaeff7",
      height: "100%",
      overflow: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.standard,
      }),
    },

    ".MuiListItemText-root > span": {
      fontSize: "0.9rem",
    },

    variants: [
      {
        props: ({ open }) => !open,
        style: {
          "& .MuiDrawer-paper": {
            width: `calc(${theme.spacing(7)} + 1px)`,
            [theme.breakpoints.up("sm")]: {
              width: `calc(${theme.spacing(8)} + 1px)`,
            },
          },
          ".MuiListItemText-root": {
            opacity: "0",
            transition: theme.transitions.create("opacity", {
              easing: theme.transitions.easing.easeInOut,
              duration: theme.transitions.duration.standard,
            }),
          },
        },
      },
    ],
  })
);
```

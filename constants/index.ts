import BiliForm from "@/components/multiplatform/BiliForm";
import {
  ClockIcon,
  DashboardIcon,
  GearIcon,
  HomeIcon,
  LayersIcon,
  UploadIcon,
  VideoIcon,
} from "@radix-ui/react-icons";

export const sidebarLinks = [
  {
    label: "Home",
    route: "/",
    iconCompoent: HomeIcon,
  },
  {
    label: "recording",
    route: "/recording",
    iconCompoent: VideoIcon,
  },
  ,
  {
    label: "history",
    route: "/history",
    iconCompoent: ClockIcon,
  },
  {
    label: "uploading",
    route: "/uploading",
    iconCompoent: UploadIcon,
  },
  {
    label: "dashboard",
    route: "/dashboard",
    iconCompoent: DashboardIcon,
  },
  {
    label: "job",
    route: "/job",
    iconCompoent: LayersIcon,
  },
  {
    label: "status",
    route: "/status",
    iconCompoent: GearIcon,
  },
];

export const multiplatFormItems = [
  {
    platform: "bilibili",
    platformComponent: BiliForm,
  },
];

import React from "react";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { iCompare } from "@/utils/icons";

const ValuationTable = () => {
  return (
    <ScrollArea className="mt-[32px] h-[584px]">
      <Table>
        <TableHeader>
          <TableRow className="border-[#2A313C] hover:bg-main_bg cursor-pointer">
            <TableHead className="text-[#A0AEC0] font-extrabold leading-[24px] tracking-[0.2px] px-0 ">
              <div className="text-xs flex items-center gap-1">
                Name/Business {iCompare}
              </div>
            </TableHead>
            <TableHead className="text-[#A0AEC0] font-extrabold leading-[24px] tracking-[0.2px] px-0 ">
              <div className="text-xs flex items-center gap-1">
                EV/Sales {iCompare}
              </div>
            </TableHead>
            <TableHead className="text-[#A0AEC0] font-extrabold leading-[24px] tracking-[0.2px] px-0 ">
              <div className="text-xs flex items-center gap-1">
                EV/EBITDA {iCompare}
              </div>
            </TableHead>
            <TableHead className="text-[#A0AEC0] font-extrabold leading-[24px] tracking-[0.2px] px-0 ">
              <div className="text-xs flex items-center gap-1">
                EV/EBIT {iCompare}
              </div>
            </TableHead>
            <TableHead className="text-[#A0AEC0] font-extrabold leading-[24px] tracking-[0.2px] px-0 ">
              <div className="text-xs flex items-center gap-1">
                P/Sales {iCompare}
              </div>
            </TableHead>
            <TableHead className="text-[#A0AEC0] font-extrabold leading-[24px] tracking-[0.2px] px-0 ">
              <div className="text-xs flex items-center gap-1">
                P/Earnings {iCompare}
              </div>
            </TableHead>
            <TableHead className="text-[#A0AEC0] font-extrabold leading-[24px] tracking-[0.2px] px-0 ">
              <div className="text-xs flex items-center gap-1">
                P/BookValue {iCompare}
              </div>
            </TableHead>
            <TableHead className="text-[#A0AEC0] font-extrabold leading-[24px] tracking-[0.2px] px-0 ">
              <div className="text-xs flex items-center gap-1">Actions</div>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="border-[#2A313C] px-0 max-h-[101px] ">
            <TableCell className="font-medium px-0 ">
              <div className="flex flex-col gap-1">
                <h1 className="text-primary_gw font-extrabold leading-[24px] tracking-[0.2px]">
                  Company 1
                </h1>
                <span className="text-[#A0AEC0] text-sm font-medium leading-[21px] tracking-[0.2px]">
                  Industry
                </span>
              </div>
            </TableCell>
            <TableCell className="text-primary_gw font-extrabold leading-[24px] tracking-[0.2px] px-0">
              -$890.15
            </TableCell>
            <TableCell className="text-primary_gw leading-[24px] tracking-[0.2px] px-0">
              PMX0979
            </TableCell>
            <TableCell className="text-primary_gw font-extrabold leading-[24px] tracking-[0.2px] px-0">
              -$890.15
            </TableCell>
            <TableCell className="text-[#FF4747] font-medium leading-[21px] tracking-[0.2px] px-0">
              <button className="w-[98px] h-[40px] bg-[#FF4747] bg-opacity-10 rounded-[8px]">
                N.A.
              </button>
            </TableCell>
            <TableCell className="text-primary_gw font-extrabold leading-[24px] tracking-[0.2px] px-0">
              -$890.15
            </TableCell>
            <TableCell className="text-primary_gw font-extrabold leading-[24px] tracking-[0.2px] px-0">
              -$890.15
            </TableCell>
            <TableCell className="text-primary_gw font-extrabold leading-[24px] tracking-[0.2px] px-0">
              <button className="w-[96px] h-[40px] border border-[#4FE270] rounded-[8px]">
                More
              </button>
            </TableCell>
          </TableRow>
          <TableRow className="border-[#2A313C] px-0 max-h-[101px] ">
            <TableCell className="font-medium px-0 ">
              <div className="flex flex-col gap-1">
                <h1 className="text-primary_gw font-extrabold leading-[24px] tracking-[0.2px]">
                  Company 1
                </h1>
                <span className="text-[#A0AEC0] text-sm font-medium leading-[21px] tracking-[0.2px]">
                  Industry
                </span>
              </div>
            </TableCell>
            <TableCell className="text-primary_gw font-extrabold leading-[24px] tracking-[0.2px] px-0">
              -$890.15
            </TableCell>
            <TableCell className="text-primary_gw leading-[24px] tracking-[0.2px] px-0">
              PMX0979
            </TableCell>
            <TableCell className="text-primary_gw font-extrabold leading-[24px] tracking-[0.2px] px-0">
              -$890.15
            </TableCell>
            <TableCell className="text-[#FF4747] font-medium leading-[21px] tracking-[0.2px] px-0">
              <button className="w-[98px] h-[40px] bg-[#FF4747] bg-opacity-10 rounded-[8px]">
                N.A.
              </button>
            </TableCell>
            <TableCell className="text-primary_gw font-extrabold leading-[24px] tracking-[0.2px] px-0">
              -$890.15
            </TableCell>
            <TableCell className="text-primary_gw font-extrabold leading-[24px] tracking-[0.2px] px-0">
              -$890.15
            </TableCell>
            <TableCell className="text-primary_gw font-extrabold leading-[24px] tracking-[0.2px] px-0">
              <button className="w-[96px] h-[40px] border border-[#4FE270] rounded-[8px]">
                More
              </button>
            </TableCell>
          </TableRow>
          <TableRow className="border-[#2A313C] px-0 max-h-[101px] ">
            <TableCell className="font-medium px-0 ">
              <div className="flex flex-col gap-1">
                <h1 className="text-primary_gw font-extrabold leading-[24px] tracking-[0.2px]">
                  Company 1
                </h1>
                <span className="text-[#A0AEC0] text-sm font-medium leading-[21px] tracking-[0.2px]">
                  Industry
                </span>
              </div>
            </TableCell>
            <TableCell className="text-primary_gw font-extrabold leading-[24px] tracking-[0.2px] px-0">
              -$890.15
            </TableCell>
            <TableCell className="text-primary_gw leading-[24px] tracking-[0.2px] px-0">
              PMX0979
            </TableCell>
            <TableCell className="text-primary_gw font-extrabold leading-[24px] tracking-[0.2px] px-0">
              -$890.15
            </TableCell>
            <TableCell className="text-[#FF4747] font-medium leading-[21px] tracking-[0.2px] px-0">
              <button className="w-[98px] h-[40px] bg-[#FF4747] bg-opacity-10 rounded-[8px]">
                N.A.
              </button>
            </TableCell>
            <TableCell className="text-primary_gw font-extrabold leading-[24px] tracking-[0.2px] px-0">
              -$890.15
            </TableCell>
            <TableCell className="text-primary_gw font-extrabold leading-[24px] tracking-[0.2px] px-0">
              -$890.15
            </TableCell>
            <TableCell className="text-primary_gw font-extrabold leading-[24px] tracking-[0.2px] px-0">
              <button className="w-[96px] h-[40px] border border-[#4FE270] rounded-[8px]">
                More
              </button>
            </TableCell>
          </TableRow>
          <TableRow className="border-[#2A313C] px-0 max-h-[101px] ">
            <TableCell className="font-medium px-0 ">
              <div className="flex flex-col gap-1">
                <h1 className="text-primary_gw font-extrabold leading-[24px] tracking-[0.2px]">
                  Company 1
                </h1>
                <span className="text-[#A0AEC0] text-sm font-medium leading-[21px] tracking-[0.2px]">
                  Industry
                </span>
              </div>
            </TableCell>
            <TableCell className="text-primary_gw font-extrabold leading-[24px] tracking-[0.2px] px-0">
              -$890.15
            </TableCell>
            <TableCell className="text-primary_gw leading-[24px] tracking-[0.2px] px-0">
              PMX0979
            </TableCell>
            <TableCell className="text-primary_gw font-extrabold leading-[24px] tracking-[0.2px] px-0">
              -$890.15
            </TableCell>
            <TableCell className="text-[#FF4747] font-medium leading-[21px] tracking-[0.2px] px-0">
              <button className="w-[98px] h-[40px] bg-[#FF4747] bg-opacity-10 rounded-[8px]">
                N.A.
              </button>
            </TableCell>
            <TableCell className="text-primary_gw font-extrabold leading-[24px] tracking-[0.2px] px-0">
              -$890.15
            </TableCell>
            <TableCell className="text-primary_gw font-extrabold leading-[24px] tracking-[0.2px] px-0">
              -$890.15
            </TableCell>
            <TableCell className="text-primary_gw font-extrabold leading-[24px] tracking-[0.2px] px-0">
              <button className="w-[96px] h-[40px] border border-[#4FE270] rounded-[8px]">
                More
              </button>
            </TableCell>
          </TableRow>
          <TableRow className="border-[#2A313C] px-0 max-h-[101px] ">
            <TableCell className="font-medium px-0 ">
              <div className="flex flex-col gap-1">
                <h1 className="text-primary_gw font-extrabold leading-[24px] tracking-[0.2px]">
                  Company 1
                </h1>
                <span className="text-[#A0AEC0] text-sm font-medium leading-[21px] tracking-[0.2px]">
                  Industry
                </span>
              </div>
            </TableCell>
            <TableCell className="text-primary_gw font-extrabold leading-[24px] tracking-[0.2px] px-0">
              -$890.15
            </TableCell>
            <TableCell className="text-primary_gw leading-[24px] tracking-[0.2px] px-0">
              PMX0979
            </TableCell>
            <TableCell className="text-primary_gw font-extrabold leading-[24px] tracking-[0.2px] px-0">
              -$890.15
            </TableCell>
            <TableCell className="text-[#FF4747] font-medium leading-[21px] tracking-[0.2px] px-0">
              <button className="w-[98px] h-[40px] bg-[#FF4747] bg-opacity-10 rounded-[8px]">
                N.A.
              </button>
            </TableCell>
            <TableCell className="text-primary_gw font-extrabold leading-[24px] tracking-[0.2px] px-0">
              -$890.15
            </TableCell>
            <TableCell className="text-primary_gw font-extrabold leading-[24px] tracking-[0.2px] px-0">
              -$890.15
            </TableCell>
            <TableCell className="text-primary_gw font-extrabold leading-[24px] tracking-[0.2px] px-0">
              <button className="w-[96px] h-[40px] border border-[#4FE270] rounded-[8px]">
                More
              </button>
            </TableCell>
          </TableRow>
          <TableRow className="border-[#2A313C] px-0 max-h-[101px] ">
            <TableCell className="font-medium px-0 ">
              <div className="flex flex-col gap-1">
                <h1 className="text-primary_gw font-extrabold leading-[24px] tracking-[0.2px]">
                  Company 1
                </h1>
                <span className="text-[#A0AEC0] text-sm font-medium leading-[21px] tracking-[0.2px]">
                  Industry
                </span>
              </div>
            </TableCell>
            <TableCell className="text-primary_gw font-extrabold leading-[24px] tracking-[0.2px] px-0">
              -$890.15
            </TableCell>
            <TableCell className="text-primary_gw leading-[24px] tracking-[0.2px] px-0">
              PMX0979
            </TableCell>
            <TableCell className="text-primary_gw font-extrabold leading-[24px] tracking-[0.2px] px-0">
              -$890.15
            </TableCell>
            <TableCell className="text-[#FF4747] font-medium leading-[21px] tracking-[0.2px] px-0">
              <button className="w-[98px] h-[40px] bg-[#FF4747] bg-opacity-10 rounded-[8px]">
                N.A.
              </button>
            </TableCell>
            <TableCell className="text-primary_gw font-extrabold leading-[24px] tracking-[0.2px] px-0">
              -$890.15
            </TableCell>
            <TableCell className="text-primary_gw font-extrabold leading-[24px] tracking-[0.2px] px-0">
              -$890.15
            </TableCell>
            <TableCell className="text-primary_gw font-extrabold leading-[24px] tracking-[0.2px] px-0">
              <button className="w-[96px] h-[40px] border border-[#4FE270] rounded-[8px]">
                More
              </button>
            </TableCell>
          </TableRow>
          <TableRow className="border-[#2A313C] px-0 max-h-[101px] ">
            <TableCell className="font-medium px-0 ">
              <div className="flex flex-col gap-1">
                <h1 className="text-primary_gw font-extrabold leading-[24px] tracking-[0.2px]">
                  Company 1
                </h1>
                <span className="text-[#A0AEC0] text-sm font-medium leading-[21px] tracking-[0.2px]">
                  Industry
                </span>
              </div>
            </TableCell>
            <TableCell className="text-primary_gw font-extrabold leading-[24px] tracking-[0.2px] px-0">
              -$890.15
            </TableCell>
            <TableCell className="text-primary_gw leading-[24px] tracking-[0.2px] px-0">
              PMX0979
            </TableCell>
            <TableCell className="text-primary_gw font-extrabold leading-[24px] tracking-[0.2px] px-0">
              -$890.15
            </TableCell>
            <TableCell className="text-[#FF4747] font-medium leading-[21px] tracking-[0.2px] px-0">
              <button className="w-[98px] h-[40px] bg-[#FF4747] bg-opacity-10 rounded-[8px]">
                N.A.
              </button>
            </TableCell>
            <TableCell className="text-primary_gw font-extrabold leading-[24px] tracking-[0.2px] px-0">
              -$890.15
            </TableCell>
            <TableCell className="text-primary_gw font-extrabold leading-[24px] tracking-[0.2px] px-0">
              -$890.15
            </TableCell>
            <TableCell className="text-primary_gw font-extrabold leading-[24px] tracking-[0.2px] px-0">
              <button className="w-[96px] h-[40px] border border-[#4FE270] rounded-[8px]">
                More
              </button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

export default ValuationTable;

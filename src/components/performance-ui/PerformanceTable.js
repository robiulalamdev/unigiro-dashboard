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

const PerformanceTable = () => {
  return (
    <ScrollArea className="mt-4 md:mt-[32px] h-[584px] w-full">
      <Table className="overflow-x-auto w-full min-w-[700px]">
        <TableHeader>
          <TableRow className="border-[#2A313C] hover:bg-main_bg cursor-pointer">
            <TableHead className="!text-xs md:text-sm text-nowrap text-[#A0AEC0] font-extrabold leading-[24px] tracking-[0.2px] px-0">
              Selected company
            </TableHead>
            <TableHead className="!text-xs md:text-sm text-nowrap text-[#A0AEC0] font-extrabold leading-[24px] tracking-[0.2px] px-0">
              Return %
            </TableHead>
            <TableHead className="!text-xs md:text-sm text-nowrap text-[#A0AEC0] font-extrabold leading-[24px] tracking-[0.2px] px-0">
              Return 1 week{" "}
            </TableHead>
            <TableHead className="!text-xs md:text-sm text-nowrap text-[#A0AEC0] font-extrabold leading-[24px] tracking-[0.2px] px-0">
              Return 1 month
            </TableHead>
            <TableHead className="!text-xs md:text-sm text-nowrap text-[#A0AEC0] font-extrabold leading-[24px] tracking-[0.2px] px-0">
              Return 3 months
            </TableHead>
            <TableHead className="!text-xs md:text-sm text-nowrap text-[#A0AEC0] font-extrabold leading-[24px] tracking-[0.2px] px-0">
              {" "}
              Return 6 months
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="border-[#2A313C] px-0 max-h-[101px] ">
            <TableCell className="font-medium px-0">
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
            <TableCell className="text-primary_gw font-extrabold leading-[24px] tracking-[0.2px] px-0">
              -$890.15
            </TableCell>
            <TableCell className="text-primary_gw font-extrabold leading-[24px] tracking-[0.2px] px-0">
              <button className="w-[96px] h-[40px] border border-[#4FE270] rounded-[8px]">
                More
              </button>
            </TableCell>
          </TableRow>
          <TableRow className="border-[#2A313C] px-0 max-h-[101px]">
            <TableCell className="font-medium px-0">
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
            <TableCell className="text-primary_gw font-extrabold leading-[24px] tracking-[0.2px] px-0">
              -$890.15
            </TableCell>
            <TableCell className="text-primary_gw font-extrabold leading-[24px] tracking-[0.2px] px-0">
              <button className="w-[96px] h-[40px] border border-[#4FE270] rounded-[8px]">
                More
              </button>
            </TableCell>
          </TableRow>
          <TableRow className="border-[#2A313C] px-0 max-h-[101px]">
            <TableCell className="font-medium px-0">
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
            <TableCell className="text-primary_gw font-extrabold leading-[24px] tracking-[0.2px] px-0">
              -$890.15
            </TableCell>
            <TableCell className="text-primary_gw font-extrabold leading-[24px] tracking-[0.2px] px-0">
              <button className="w-[96px] h-[40px] border border-[#4FE270] rounded-[8px]">
                More
              </button>
            </TableCell>
          </TableRow>
          <TableRow className="border-[#2A313C] px-0 max-h-[101px]">
            <TableCell className="font-medium px-0">
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
            <TableCell className="text-primary_gw font-extrabold leading-[24px] tracking-[0.2px] px-0">
              -$890.15
            </TableCell>
            <TableCell className="text-primary_gw font-extrabold leading-[24px] tracking-[0.2px] px-0">
              <button className="w-[96px] h-[40px] border border-[#4FE270] rounded-[8px]">
                More
              </button>
            </TableCell>
          </TableRow>
          <TableRow className="border-[#2A313C] px-0 max-h-[101px]">
            <TableCell className="font-medium px-0">
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
            <TableCell className="text-primary_gw font-extrabold leading-[24px] tracking-[0.2px] px-0">
              -$890.15
            </TableCell>
            <TableCell className="text-primary_gw font-extrabold leading-[24px] tracking-[0.2px] px-0">
              <button className="w-[96px] h-[40px] border border-[#4FE270] rounded-[8px]">
                More
              </button>
            </TableCell>
          </TableRow>
          <TableRow className="border-[#2A313C] px-0 max-h-[101px]">
            <TableCell className="font-medium px-0">
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
            <TableCell className="text-primary_gw font-extrabold leading-[24px] tracking-[0.2px] px-0">
              -$890.15
            </TableCell>
            <TableCell className="text-primary_gw font-extrabold leading-[24px] tracking-[0.2px] px-0">
              <button className="w-[96px] h-[40px] border border-[#4FE270] rounded-[8px]">
                More
              </button>
            </TableCell>
          </TableRow>
          <TableRow className="border-[#2A313C] px-0 max-h-[101px]">
            <TableCell className="font-medium px-0">
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
            <TableCell className="text-primary_gw font-extrabold leading-[24px] tracking-[0.2px] px-0">
              -$890.15
            </TableCell>
            <TableCell className="text-primary_gw font-extrabold leading-[24px] tracking-[0.2px] px-0">
              <button className="w-[96px] h-[40px] border border-[#4FE270] rounded-[8px]">
                More
              </button>
            </TableCell>
          </TableRow>
          <TableRow className="border-[#2A313C] px-0 max-h-[101px]">
            <TableCell className="font-medium px-0">
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
            <TableCell className="text-primary_gw font-extrabold leading-[24px] tracking-[0.2px] px-0">
              -$890.15
            </TableCell>
            <TableCell className="text-primary_gw font-extrabold leading-[24px] tracking-[0.2px] px-0">
              <button className="w-[96px] h-[40px] border border-[#4FE270] rounded-[8px]">
                More
              </button>
            </TableCell>
          </TableRow>
          <TableRow className="border-[#2A313C] px-0 max-h-[101px]">
            <TableCell className="font-medium px-0">
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
            <TableCell className="text-primary_gw font-extrabold leading-[24px] tracking-[0.2px] px-0">
              -$890.15
            </TableCell>
            <TableCell className="text-primary_gw font-extrabold leading-[24px] tracking-[0.2px] px-0">
              <button className="w-[96px] h-[40px] border border-[#4FE270] rounded-[8px]">
                More
              </button>
            </TableCell>
          </TableRow>
          <TableRow className="border-[#2A313C] px-0 max-h-[101px]">
            <TableCell className="font-medium px-0">
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
            <TableCell className="text-primary_gw font-extrabold leading-[24px] tracking-[0.2px] px-0">
              -$890.15
            </TableCell>
            <TableCell className="text-primary_gw font-extrabold leading-[24px] tracking-[0.2px] px-0">
              <button className="w-[96px] h-[40px] border border-[#4FE270] rounded-[8px]">
                More
              </button>
            </TableCell>
          </TableRow>
          <TableRow className="border-[#2A313C] px-0 max-h-[101px]">
            <TableCell className="font-medium px-0">
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
            <TableCell className="text-primary_gw font-extrabold leading-[24px] tracking-[0.2px] px-0">
              -$890.15
            </TableCell>
            <TableCell className="text-primary_gw font-extrabold leading-[24px] tracking-[0.2px] px-0">
              <button className="w-[96px] h-[40px] border border-[#4FE270] rounded-[8px]">
                More
              </button>
            </TableCell>
          </TableRow>
          <TableRow className="border-[#2A313C] px-0 max-h-[101px]">
            <TableCell className="font-medium px-0">
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
            <TableCell className="text-primary_gw font-extrabold leading-[24px] tracking-[0.2px] px-0">
              -$890.15
            </TableCell>
            <TableCell className="text-primary_gw font-extrabold leading-[24px] tracking-[0.2px] px-0">
              <button className="w-[96px] h-[40px] border border-[#4FE270] rounded-[8px]">
                More
              </button>
            </TableCell>
          </TableRow>
          <TableRow className="border-[#2A313C] px-0 max-h-[101px]">
            <TableCell className="font-medium px-0">
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
            <TableCell className="text-primary_gw font-extrabold leading-[24px] tracking-[0.2px] px-0">
              -$890.15
            </TableCell>
            <TableCell className="text-primary_gw font-extrabold leading-[24px] tracking-[0.2px] px-0">
              <button className="w-[96px] h-[40px] border border-[#4FE270] rounded-[8px]">
                More
              </button>
            </TableCell>
          </TableRow>
          <TableRow className="border-[#2A313C] px-0 max-h-[101px]">
            <TableCell className="font-medium px-0">
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
            <TableCell className="text-primary_gw font-extrabold leading-[24px] tracking-[0.2px] px-0">
              -$890.15
            </TableCell>
            <TableCell className="text-primary_gw font-extrabold leading-[24px] tracking-[0.2px] px-0">
              <button className="w-[96px] h-[40px] border border-[#4FE270] rounded-[8px]">
                More
              </button>
            </TableCell>
          </TableRow>
          <TableRow className="border-[#2A313C] px-0 max-h-[101px]">
            <TableCell className="font-medium px-0">
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
            <TableCell className="text-primary_gw font-extrabold leading-[24px] tracking-[0.2px] px-0">
              -$890.15
            </TableCell>
            <TableCell className="text-primary_gw font-extrabold leading-[24px] tracking-[0.2px] px-0">
              <button className="w-[96px] h-[40px] border border-[#4FE270] rounded-[8px]">
                More
              </button>
            </TableCell>
          </TableRow>
          <TableRow className="border-[#2A313C] px-0 max-h-[101px]">
            <TableCell className="font-medium px-0">
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
            <TableCell className="text-primary_gw font-extrabold leading-[24px] tracking-[0.2px] px-0">
              -$890.15
            </TableCell>
            <TableCell className="text-primary_gw font-extrabold leading-[24px] tracking-[0.2px] px-0">
              <button className="w-[96px] h-[40px] border border-[#4FE270] rounded-[8px]">
                More
              </button>
            </TableCell>
          </TableRow>
          <TableRow className="border-[#2A313C] px-0 max-h-[101px]">
            <TableCell className="font-medium px-0">
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

export default PerformanceTable;

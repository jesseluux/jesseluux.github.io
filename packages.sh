#!/bin/bash
dpkg-deb -bZgzip projects/JP_LS_1 debs
dpkg-deb -bZgzip projects/JP_LS_1_dark debs

#dpkg-deb -bZgzip projects/<project name> <output folder>
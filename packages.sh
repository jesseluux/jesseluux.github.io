#!/bin/bash
dpkg-deb -bZgzip projects/JP_LS_1 debs
dpkg-deb -bZgzip projects/JP_LS_1_dark debs
dpkg-deb -bZgzip projects/JP_LS_2 debs
dpkg-deb -bZgzip projects/Circlelock debs

#dpkg-deb -bZgzip projects/<project name> <output folder>